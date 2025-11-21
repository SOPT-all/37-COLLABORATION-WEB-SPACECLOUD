import Button from '@/shared/ui/Button';
import { MinusIcon, PlusIcon } from '@/shared/assets/icons';
import * as s from './CapacityModalContent.css.ts';
import type { ModalProps } from '@/shared/types/common.ts';

const CapacityModalContent = ({ onClose }: ModalProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <h3 className={s.label}>인원</h3>
        <div className={s.counter}>
          <Button styleType='counter'>
            <MinusIcon width={10} height={2} />
          </Button>
          <span className={s.num}>6</span>
          <Button styleType='counter'>
            <PlusIcon width={10} height={10} />
          </Button>
        </div>
      </div>
      <div className={s.bottom}>
        <Button styleType='cta' font='body_sb_16' onClick={onClose}>
          <span>인원수 적용하기</span>
        </Button>
      </div>
    </div>
  );
};

export default CapacityModalContent;
