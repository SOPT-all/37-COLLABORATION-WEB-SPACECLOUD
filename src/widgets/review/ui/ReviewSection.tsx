import type { ComponentProps } from 'react';
import ReviewCard from './reviewCard/ReviewCard';
import ReviewMoreButton from './reviewMoreButton/ReviewMoreButton';
import * as s from './ReviewSection.css';

type ReviewCardProps = ComponentProps<typeof ReviewCard>;

interface ReviewSectionProps {
  reviews: ReviewCardProps[];
  onClickMore?: () => void;
}

const ReviewSection = ({ reviews, onClickMore }: ReviewSectionProps) => {
  const visibleReviews = reviews.slice(0, 4);

  return (
    <section className={s.section}>
      <div className={s.grid}>
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>

      <div className={s.moreButtonWrapper}>
        <ReviewMoreButton onClick={onClickMore} />
      </div>
    </section>
  );
};

export default ReviewSection;
