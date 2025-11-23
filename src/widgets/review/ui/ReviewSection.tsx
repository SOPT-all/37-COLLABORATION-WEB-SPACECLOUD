import type { ComponentProps } from 'react';
import { useEffect, useRef, useState } from 'react';
import ReviewCard from './reviewCard/ReviewCard';
import ReviewMoreButton from './reviewMoreButton/ReviewMoreButton';
import * as s from './ReviewSection.css';
import { useReviewListQuery } from '../api/useReviewListQuery';

type ReviewCardProps = ComponentProps<typeof ReviewCard>;

interface ReviewSectionProps {
  onClickMore?: () => void;
}

const ReviewSection = ({ onClickMore }: ReviewSectionProps) => {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } = useReviewListQuery();
  const [isInfiniteMode, setInfiniteMode] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const reviews: ReviewCardProps[] = data?.pages.flatMap((page) => page.data.content) ?? [];

  const hasNext = data?.pages.at(-1)?.data.hasNext ?? false;
  const showMoreButton = hasNext && !isInfiniteMode;

  const handleClickMore = () => {
    setInfiniteMode(true);
    fetchNextPage();
    onClickMore?.();
  };

  useEffect(() => {
    if (!isInfiniteMode) return;
    if (!hasNext) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;
        if (isFetchingNextPage) return;

        fetchNextPage();
      },
      { rootMargin: '100px 0px' },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNext, isFetchingNextPage, isInfiniteMode]);

  if (isLoading || isError) return null;

  return (
    <section className={s.section}>
      <div className={s.grid}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
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
