import clsx from 'clsx';
import { LocationIcon, PeopleIcon, SquareChatIcon, HeartIcon } from '@/shared/assets/icons';
import { CardLayout, cardImage as cardLayoutImage } from '@/shared/ui/cardLayout';
import * as s from './PlaceCard.css';

interface PlaceCardProps {
  id: number;
  name: string;
  capacity: number;
  commentCount: number;
  likeCount: number;
  price: number;
  priceUnit: string;
  thumbnailImageUrl: string;
  hashtags: string[];
  address: string;
}

const PRICE_UNIT_TEXT: Record<string, string> = {
  HOUR: '시간',
  MONTH: '월',
  PACKAGE: '패키지',
};

const PlaceCard = ({
  id,
  name,
  capacity,
  commentCount,
  likeCount,
  price,
  priceUnit,
  thumbnailImageUrl,
  hashtags,
  address,
}: PlaceCardProps) => {
  return (
    <CardLayout
      orientation='vertical'
      image={
        <img
          src={thumbnailImageUrl}
          alt={name}
          className={cardLayoutImage}
          loading='lazy'
          draggable={false}
        />
      }
      bodyClassName={s.textArea}
    >
      <div className={s.titleRow}>
        <h3 className={s.name}>{name}</h3>
        <p className={s.location}>
          <LocationIcon className={s.icon({ size: 'lg' })} aria-hidden='true' />
          <span>{address}</span>
        </p>
      </div>

      <ul className={s.tagsRow}>
        {hashtags.map((tag) => (
          <li key={`${id}-${tag}`} className={s.tag}>
            #{tag}
          </li>
        ))}
      </ul>

      <div className={s.bottomRow}>
        <div className={s.meta}>
          <div className={s.metaItem({ gap: 'default' })}>
            <PeopleIcon className={s.icon({ size: 'md' })} aria-hidden='true' />
            <span>최대 {capacity}인</span>
          </div>
          <div
            className={clsx(s.metaItem({ gap: 'default' }), s.metaSpacing({ size: 'comment' }))}
            aria-label={`후기 ${commentCount}개`}
          >
            <SquareChatIcon className={s.icon({ size: 'sm' })} aria-hidden='true' />
            <span>{commentCount}</span>
          </div>
          <div
            className={clsx(s.metaItem({ gap: 'tight' }), s.metaSpacing({ size: 'like' }))}
            aria-label={`좋아요 ${likeCount}개`}
          >
            <HeartIcon className={s.icon({ size: 'md' })} aria-hidden='true' />
            <span>{likeCount}</span>
          </div>
        </div>

        <p className={s.price}>
          {price.toLocaleString()}
          <span className={s.priceUnit}>원/{PRICE_UNIT_TEXT[priceUnit] ?? priceUnit}</span>
        </p>
      </div>
    </CardLayout>
  );
};

export default PlaceCard;
