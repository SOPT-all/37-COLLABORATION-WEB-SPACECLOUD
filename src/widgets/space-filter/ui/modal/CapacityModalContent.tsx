import { useState } from 'react';
import Button from '@/shared/ui/Button';
import { MinusIcon, PlusIcon } from '@/shared/assets/icons';
import * as s from './CapacityModalContent.css.ts';
import type { ModalContentProps } from '@/shared/types/common.ts';

const CapacityModalContent = ({ onClose, onChange, value }: ModalContentProps) => {
  const [count, setCount] = useState(value === null ? 1 : Number(value));

  const handleClick = (value: string) => {
    onChange?.(value);
    onClose?.();
  };

  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <h3 className={s.label}>인원</h3>
        <div className={s.counter}>
          <Button
            styleType='counter'
            onClick={() => setCount((prev) => prev - 1)}
            disabled={count === 1}
          >
            <MinusIcon width={10} height={2} />
          </Button>
          <span className={s.num}>{count}</span>
          <Button styleType='counter' onClick={() => setCount((prev) => prev + 1)}>
            <PlusIcon width={10} height={10} />
          </Button>
        </div>
      </div>
      <div className={s.bottom}>
        <Button styleType='cta' font='body_sb_16' onClick={() => handleClick(count.toString())}>
          <span>인원수 적용하기</span>
        </Button>
      </div>
    </div>
  );
};

export default CapacityModalContent;
