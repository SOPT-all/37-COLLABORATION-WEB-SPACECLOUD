import { StarIcon } from '@/shared/assets/icons';
import { CardLayout, cardImage as cardLayoutImage } from '@/shared/ui/cardLayout';
import { Categories } from '@/shared/ui/Categories';
import * as s from './ReviewCard.css';

interface ReviewCardProps {
  id: number;
  score: number;
  title: string;
  detail: string;
  reviewImageUrl: string;
  categories: string[];
  price: number;
  unit: string;
}

const ReviewCard = ({
  id,
  score,
  title,
  detail,
  reviewImageUrl,
  categories,
  price,
  unit,
}: ReviewCardProps) => {
  const stars = Array.from({ length: Math.max(0, score) }, (_, index) => index);

  return (
    <CardLayout
      orientation='horizontal'
      image={
        <img
          src={reviewImageUrl}
          alt={title}
          className={cardLayoutImage}
          loading='lazy'
          draggable={false}
        />
      }
      bodyClassName={s.textArea}
    >
      <div>
        <div className={s.tagAndTitle}>
          <Categories categories={categories} id={id} />
          <h3 className={s.title}>{title}</h3>
        </div>

        <div className={s.ratingRow}>
          <div className={s.stars} role='img' aria-label={`별 ${score}개`}>
            {stars.map((index) => (
              <StarIcon key={`${id}-star-${index}`} className={s.starIcon} aria-hidden='true' />
            ))}
          </div>

          <div className={s.priceWrapper}>
            <span className={s.price}>{price.toLocaleString()}</span>{' '}
            <span className={s.unit}>{unit}</span>
          </div>
        </div>
      </div>

      <p className={s.description}>{detail}</p>
    </CardLayout>
  );
};

export default ReviewCard;
