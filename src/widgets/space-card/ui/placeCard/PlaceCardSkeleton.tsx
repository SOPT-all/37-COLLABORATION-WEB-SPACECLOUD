import { CardLayout } from '@/shared/ui/cardLayout';
import * as s from './PlaceCardSkeleton.css';

const PlaceCardSkeleton = () => {
  return (
    <CardLayout
      orientation='vertical'
      imageWrapperClassName={s.imageWrapper}
      image={
        <div className={s.image} aria-hidden>
          <span className={s.couponBadge} />
        </div>
      }
      bodyClassName={s.body}
    >
      <div className={s.titleRow}>
        <span className={s.title} />
        <span className={s.location} />
      </div>

      <div className={s.tagsRow}>
        <span className={s.tag} />
        <span className={s.tag} />
        <span className={s.tagWide} />
      </div>

      <div className={s.bottomRow}>
        <div className={s.meta}>
          <span className={s.metaItem} />
          <span className={s.metaItem} />
          <span className={s.metaItem} />
        </div>
        <span className={s.price} />
      </div>
    </CardLayout>
  );
};

export default PlaceCardSkeleton;
