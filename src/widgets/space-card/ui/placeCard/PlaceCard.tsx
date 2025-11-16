import clsx from 'clsx';
import HeartIcon from '@shared/assets/ic/ic_heart.svg?react';
import LocationIcon from '@shared/assets/ic/ic_location.svg?react';
import PeopleIcon from '@shared/assets/ic/ic_people.svg?react';
import SquareChatIcon from '@shared/assets/ic/ic_squarechat.svg?react';
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
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} className={styles.image} loading='lazy' draggable={false} />
      </div>

      <div className={styles.textArea}>
        <div className={styles.titleRow}>
          <div className={styles.name}>{name}</div>
          <div className={styles.location}>
            <LocationIcon className={styles.locationIcon} aria-hidden />
            <span>{location}</span>
          </div>
        </div>

        <ul className={styles.tagsRow}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
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
            <div className={clsx(styles.metaItem, styles.metaComment)}>
              <SquareChatIcon className={styles.commentIcon} aria-hidden />
              <span className={styles.metaText}>{commentCount}</span>
            </div>
            <div className={clsx(styles.metaItem, styles.metaLike)}>
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
    </div>
  );
};

export default PlaceCard;
