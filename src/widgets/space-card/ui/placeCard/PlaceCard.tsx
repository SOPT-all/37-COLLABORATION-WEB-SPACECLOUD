import clsx from 'clsx';
import { LocationIcon, PeopleIcon, SquareChatIcon, HeartIcon } from '@/shared/assets/icons';
import * as s from './PlaceCard.css';

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
    <article className={s.card}>
      <div className={s.imageWrapper}>
        <img src={imageUrl} alt={name} className={s.image} loading='lazy' draggable={false} />
      </div>

      <div className={s.textArea}>
        <div className={s.titleRow}>
          <h3 className={s.name}>{name}</h3>
          <p className={s.location}>
            <LocationIcon className={s.locationIcon} aria-hidden />
            <span>{location}</span>
          </p>
        </div>

        <ul className={s.tagsRow}>
          {tags.map((tag, index) => (
            <li key={`${tag}-${index}`} className={s.tag}>
              #{tag}
            </li>
          ))}
        </ul>

        <div className={s.bottomRow}>
          <div className={s.meta}>
            <div className={s.metaItem}>
              <PeopleIcon className={s.capacityIcon} aria-hidden />
              <span className={s.metaText}>최대 {capacity}인</span>
            </div>
            <div
              className={clsx(s.metaItem, s.metaComment)}
              aria-label={`후기 ${commentCount}개`}
            >
              <SquareChatIcon className={s.commentIcon} aria-hidden />
              <span className={s.metaText}>{commentCount}</span>
            </div>
            <div
              className={clsx(s.metaItem, s.metaLike)}
              aria-label={`좋아요 ${likeCount}개`}
            >
              <HeartIcon className={s.likeIcon} aria-hidden />
              <span className={s.metaTextTight}>{likeCount}</span>
            </div>
          </div>

          <p className={s.price}>
            {price.toLocaleString()}
            <span className={s.priceUnit}>원/시간</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default PlaceCard;
