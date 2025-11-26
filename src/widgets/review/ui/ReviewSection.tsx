import { type ComponentProps, useState } from 'react';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import Deferred from '@/shared/ui/deferred/Deferred';
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
  const { data, fetchNextPage, isFetchingNextPage } = useReviewListQuery();
  const [isInfiniteMode, setInfiniteMode] = useState(false);

  const lastPage = data?.pages.at(-1);
  const reviews: ReviewCardProps[] = data.pages.flatMap((page) => page.data.content) ?? [];
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

  // 더보기 버튼 클릭 시 무한 스크롤 모드로 전환
  const handleClickMore = () => {
    setInfiniteMode(true);
    fetchNextPage();
    onClickMore?.();
  };

  const renderContent = () => (
    <section className={s.section}>
      <div className={s.grid}>
        {reviews.map((review) => (
          <ReviewCard key={`review-${review.id}`} {...review} />
        ))}
        <Deferred active={isFetchingNextPage}>
          {renderSkeletons(skeletonCount, `page-${nextPageIndex}-skeleton`)}
        </Deferred>
      </div>

      {showMoreButton && (
        <div className={s.moreButtonWrapper}>
          <ReviewMoreButton onClick={handleClickMore} />
        </div>
      )}

      {canFetchMore && <div ref={sentinelRef} className={s.sentinel} aria-hidden />}
    </section>
  );

  return renderContent();
};

export default ReviewSection;
