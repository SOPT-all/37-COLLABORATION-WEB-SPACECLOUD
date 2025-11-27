import ReviewCardSkeleton from './reviewCard/ReviewCardSkeleton';
import * as s from './ReviewSection.css';

const DEFAULT_SKELETON_COUNT = 4;

const ReviewSectionSkeleton = () => {
  return (
    <section className={s.section}>
      <div className={s.grid}>
        {Array.from({ length: DEFAULT_SKELETON_COUNT }).map((_, index) => (
          <ReviewCardSkeleton key={`review-skeleton-${index}`} />
        ))}
      </div>

      <div className={s.moreButtonWrapper}>
        <div className={s.moreButtonSkeleton} aria-hidden />
      </div>
    </section>
  );
};

export default ReviewSectionSkeleton;
