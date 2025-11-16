import clsx from 'clsx';
import { LocationIcon, PeopleIcon, SquareChatIcon, HeartIcon } from '@/shared/assets/icons';
import * as styles from './PlaceCard.css';

interface PlaceCardProps {
  imageUrl: string;
  name: string;
  tags: string[];
  capacity: number;
  commentCount: number;
  likeCount: number;
  price: number;
  location: string;
}

const PlaceCard = ({
  imageUrl,
  name,
  tags,
  capacity,
  commentCount,
  likeCount,
  price,
  location,
}: PlaceCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} className={styles.image} loading='lazy' draggable={false} />
      </div>

      <div className={styles.textArea}>
        <div className={styles.titleRow}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.location}>
            <LocationIcon className={styles.locationIcon} aria-hidden />
            <span>{location}</span>
          </p>
        </div>

        <ul className={styles.tagsRow}>
          {tags.map((tag, index) => (
            <li key={`${tag}-${index}`} className={styles.tag}>
              #{tag}
            </li>
          ))}
        </ul>

        <div className={styles.bottomRow}>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <PeopleIcon className={styles.capacityIcon} aria-hidden />
              <span className={styles.metaText}>최대 {capacity}인</span>
            </div>
            <div
              className={clsx(styles.metaItem, styles.metaComment)}
              aria-label={`후기 ${commentCount}개`}
            >
              <SquareChatIcon className={styles.commentIcon} aria-hidden />
              <span className={styles.metaText}>{commentCount}</span>
            </div>
            <div
              className={clsx(styles.metaItem, styles.metaLike)}
              aria-label={`좋아요 ${likeCount}개`}
            >
              <HeartIcon className={styles.likeIcon} aria-hidden />
              <span className={styles.metaTextTight}>{likeCount}</span>
            </div>
          </div>

          <p className={styles.price}>
            {price.toLocaleString()}
            <span className={styles.priceUnit}>원/시간</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default PlaceCard;
