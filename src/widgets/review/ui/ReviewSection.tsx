import type { ComponentProps } from 'react';
import { useCallback, useState } from 'react';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import ReviewCard from './reviewCard/ReviewCard';
import ReviewMoreButton from './reviewMoreButton/ReviewMoreButton';
import { useReviewListQuery } from '../api/useReviewListQuery';
import ReviewCardSkeleton from './reviewCard/ReviewCardSkeleton';
import * as s from './ReviewSection.css';

type ReviewCardProps = ComponentProps<typeof ReviewCard>;

interface ReviewSectionProps {
  onClickMore?: () => void;
}

const DEFAULT_SKELETON_COUNT = 4;

const renderSkeletons = (count: number, prefix: string) =>
  Array.from({ length: count }).map((_, index) => (
    <ReviewCardSkeleton key={`${prefix}-${index}`} />
  ));

const ReviewSection = ({ onClickMore }: ReviewSectionProps) => {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } = useReviewListQuery();
  const [isInfiniteMode, setInfiniteMode] = useState(false);

  const reviews: ReviewCardProps[] = data?.pages.flatMap((page) => page.data.content) ?? [];

  const hasNext = data?.pages.at(-1)?.data.hasNext ?? false;
  const showMoreButton = hasNext && !isInfiniteMode;
  const nextSkeletonCount = data?.pages.at(-1)?.data.content.length || DEFAULT_SKELETON_COUNT;
  const nextPageIndex = data?.pages.length ?? 1;

  const handleIntersect = useCallback(() => {
    if (!isInfiniteMode) return;
    if (!hasNext) return;
    if (isFetchingNextPage) return;
    fetchNextPage();
  }, [fetchNextPage, hasNext, isFetchingNextPage, isInfiniteMode]);

  const sentinelRef = useIntersectionObserver<HTMLDivElement>({
    onIntersect: handleIntersect,
    enabled: isInfiniteMode && hasNext,
    rootMargin: '100px 0px',
  });

  const handleClickMore = () => {
    setInfiniteMode(true);
    fetchNextPage();
    onClickMore?.();
  };

  if (isError) return null;

  if (isLoading) {
    return (
      <section className={s.section}>
        <div className={s.grid} aria-label='리뷰 로딩 중'>
          {renderSkeletons(nextSkeletonCount, 'initial-skeleton')}
        </div>
      </section>
    );
  }

  return (
    <section className={s.section}>
      <div className={s.grid}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
        {isFetchingNextPage && renderSkeletons(nextSkeletonCount, `page-${nextPageIndex}-skeleton`)}
      </div>

      {showMoreButton && (
        <div className={s.moreButtonWrapper}>
          <ReviewMoreButton onClick={handleClickMore} />
        </div>
      )}

      {isInfiniteMode && hasNext && <div ref={sentinelRef} className={s.sentinel} aria-hidden />}
    </section>
  );
};

export default ReviewSection;
