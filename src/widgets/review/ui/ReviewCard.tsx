import { StarIcon } from '@/shared/assets/icons';
import * as s from './ReviewCard.css';

interface ReviewCardProps {
  imageUrl: string;
  placeTags: string[];
  title: string;
  starCount: number;
  price: number;
  unit: string;
  description: string;
}

const ReviewCard = ({
  imageUrl,
  placeTags,
  title,
  starCount,
  price,
  unit,
  description,
}: ReviewCardProps) => {
  const stars = Array.from({ length: Math.max(0, starCount) }, (_, index) => index);

  return (
    <article className={s.card}>
      <div className={s.imageWrapper}>
        <img src={imageUrl} alt={title} className={s.image} loading='lazy' draggable={false} />
      </div>

      <div className={s.textArea}>
        <div>
          <div className={s.tagAndTitle}>
            <ul className={s.placeTags} aria-label='공간 태그'>
              {placeTags.map((tag) => (
                <li key={tag} className={s.placeTag}>
                  <span className={s.placeTagText}>{tag}</span>
                </li>
              ))}
            </ul>
            <h3 className={s.title}>{title}</h3>
          </div>

          <div className={s.ratingRow}>
            <div className={s.stars} role='img' aria-label={`별 ${starCount}개`}>
              {stars.map((index) => (
                <StarIcon key={`star-${index}`} className={s.starIcon} aria-hidden='true' />
              ))}
            </div>

            <div className={s.priceWrapper}>
              <span className={s.price}>{price.toLocaleString()}</span>{' '}
              <span className={s.unit}>{unit}</span>
            </div>
          </div>
        </div>

        <p className={s.description}>{description}</p>
      </div>
    </article>
  );
};

export default ReviewCard;
