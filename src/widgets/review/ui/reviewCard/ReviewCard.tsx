import { StarIcon } from '@shared/assets/icons';
import { getPriceUnitLabel, type PriceUnitCode } from '@shared/constants/priceUnit';
import { CardLayout, cardImage as cardLayoutImage } from '@shared/ui/cardLayout';
import Chip from '@shared/ui/chip/Chip';
import * as s from './ReviewCard.css';

interface ReviewCardProps {
  id: number;
  score: number;
  title: string;
  detail: string;
  reviewImageUrl: string;
  categories: { code: string; name: string }[];
  price: number;
  priceUnit: PriceUnitCode;
}

const ReviewCard = ({
  id,
  score,
  title,
  detail,
  reviewImageUrl,
  categories,
  price,
  priceUnit,
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
          <div className={s.categories}>
            {categories.map((category) => {
              const categoryKey = category.code;
              return <Chip key={`${id}-${categoryKey}`}>{category.name}</Chip>;
            })}
          </div>
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
            <span className={s.unit}>원/{getPriceUnitLabel(priceUnit)}</span>
          </div>
        </div>
      </div>

      <p className={s.description}>{detail}</p>
    </CardLayout>
  );
};

export default ReviewCard;
