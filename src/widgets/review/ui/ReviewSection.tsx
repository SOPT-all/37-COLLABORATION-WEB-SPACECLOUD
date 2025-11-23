import { type ComponentProps, useState } from 'react';
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

  const lastPage = data?.pages.at(-1);
  const reviews: ReviewCardProps[] = data?.pages.flatMap((page) => page.data.content) ?? [];
  const skeletonCount = lastPage?.data.content.length ?? DEFAULT_SKELETON_COUNT;
  const canFetchMore = isInfiniteMode && (lastPage?.data.hasNext ?? false);
  const nextPageIndex = data?.pages.length ?? 1;
  const showMoreButton = (lastPage?.data.hasNext ?? false) && !isInfiniteMode;

  const handleIntersect = () => {
    if (!canFetchMore || isFetchingNextPage) return;
    fetchNextPage();
  };

  const sentinelRef = useIntersectionObserver<HTMLDivElement>({
    onIntersect: handleIntersect,
    enabled: canFetchMore,
    rootMargin: '100px 0px',
  });

  const handleClickMore = () => {
    setInfiniteMode(true);
    fetchNextPage();
    onClickMore?.();
  };

  if (isError) return null;

  const renderLoading = () => (
    <section className={s.section}>
      <div className={s.grid} aria-label='리뷰 로딩 중'>
        {renderSkeletons(skeletonCount, 'initial-skeleton')}
      </div>
    </section>
  );

  const renderContent = () => (
    <section className={s.section}>
      <div className={s.grid}>
        {reviews.map((review) => (
          <ReviewCard key={`review-${review.id}`} {...review} />
        ))}
        {isFetchingNextPage && renderSkeletons(skeletonCount, `page-${nextPageIndex}-skeleton`)}
      </div>

      {showMoreButton && (
        <div className={s.moreButtonWrapper}>
          <ReviewMoreButton onClick={handleClickMore} />
        </div>
      )}

      {canFetchMore && (
        <div ref={sentinelRef} className={s.sentinel} aria-hidden />
      )}
    </section>
  );

  return isLoading ? renderLoading() : renderContent();
};

export default ReviewSection;
