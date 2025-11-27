import { useState } from 'react';
import { btn } from './CouponBtn.css';
import { CheckIcon } from '@shared/assets/icons';

const CouponBtn = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      type='button'
      className={btn({ clicked: isClicked })}
      onClick={() => setIsClicked(!isClicked)}
    >
      {isClicked && <CheckIcon />}
      쿠폰할인
    </button>
  );
};

export default CouponBtn;
