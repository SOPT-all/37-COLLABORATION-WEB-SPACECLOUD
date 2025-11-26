import { ArrowDownIcon } from '@/shared/assets/icons';
import * as s from './ReviewMoreButton.css';

interface ReviewMoreButtonProps {
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

const REVIEW_MORE_LABEL = '이용후기 더 보기';

const ReviewMoreButton = ({ onClick }: ReviewMoreButtonProps) => {
  return (
    <button className={s.button} type='button' onClick={onClick}>
      {REVIEW_MORE_LABEL}
      <ArrowDownIcon width='1.1rem' height='1.1rem' />
    </button>
  );
};

export default ReviewMoreButton;
