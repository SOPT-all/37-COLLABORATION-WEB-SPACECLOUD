import { CardLayout } from '@shared/ui/cardLayout';
import * as s from './ReviewCardSkeleton.css';

const ReviewCardSkeleton = () => {
  return (
    <CardLayout
      orientation='horizontal'
      image={<div className={s.image} aria-hidden />}
      bodyClassName={s.body}
    >
      <div className={s.chipRow}>
        <span className={s.chip} />
        <span className={s.chip} />
      </div>
      <span className={s.lineShort} />
      <span className={s.line} />
      <span className={s.line} />
    </CardLayout>
  );
};

export default ReviewCardSkeleton;
