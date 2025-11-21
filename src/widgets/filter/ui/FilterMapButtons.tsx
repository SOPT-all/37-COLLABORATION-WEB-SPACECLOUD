import Button from '@shared/ui/Button.tsx';
import { overlay } from 'overlay-kit';
import { IcFilter, IcMap } from '@shared/assets/icons/space-types';
import Row from '@shared/ui/Row.tsx';
import { vars } from '@shared/styles/token.css.ts';

const FilterMapButtons = () => {
  const openFilter = () =>
    overlay.open(({ isOpen, close }) => (
      <dialog open={isOpen} onClose={close} closedby='any'>
        데이터 필터
      </dialog>
    ));

  const openMap = () => undefined;
  return (
    <Row gap={vars.space.s4} width='min'>
      <Button onClick={openFilter} styleType='dataFilter' font='body_sb_16' gap='g4'>
        <IcFilter />
        <span>필터</span>
      </Button>
      <Button onClick={openMap} styleType='dataFilter' font='body_sb_16' gap='g4'>
        <IcMap />
        <span>필터</span>
      </Button>
    </Row>
  );
};

export default FilterMapButtons;
