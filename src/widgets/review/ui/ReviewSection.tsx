import type { ComponentProps } from 'react';
import ReviewCard from './reviewCard/ReviewCard';
import ReviewMoreButton from './reviewMoreButton/ReviewMoreButton';
import * as s from './ReviewSection.css';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll';

type ReviewCardProps = ComponentProps<typeof ReviewCard>;

interface ReviewSectionProps {
  reviews: ReviewCardProps[];
  onClickMore?: () => void;
}

const ReviewSection = ({ reviews, onClickMore }: ReviewSectionProps) => {
  const { visibleCount, hasMore, showMoreButton, sentinelRef, startInfiniteScroll, isInfiniteMode } =
    useInfiniteScroll(reviews.length, { initialCount: 4, batchSize: 4 });

  const visibleReviews = reviews.slice(0, visibleCount);

  const handleClickMore = () => {
    startInfiniteScroll();
    onClickMore?.();
  };

  return (
    <section className={s.section}>
      <div className={s.grid}>
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>

      {showMoreButton && (
        <div className={s.moreButtonWrapper}>
          <ReviewMoreButton onClick={handleClickMore} />
        </div>
      )}

      {isInfiniteMode && hasMore && <div ref={sentinelRef} className={s.sentinel} aria-hidden />}
    </section>
  );
};

export default ReviewSection;
