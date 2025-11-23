import clsx from 'clsx';
import * as S from '@widgets/filter/ui/data-filter/DataFilter.css.ts';
import { Row } from '@shared/ui/layout';
import Button from '@shared/ui/Button.tsx';
import { ResetIcon } from '@shared/assets/icons';

type FilterFooterProps = {
  onReset: () => void;
  onApply: () => void;
};

const FilterFooter = ({ onApply, onReset }: FilterFooterProps) => {
  return (
    <footer className={clsx(S.section({ paddingY: 'tight' }), S.formFooter)}>
      <Row justify='between' gap='12.7rem'>
        <Button
          type='reset'
          width='min'
          styleType={'reset'}
          font='body_m_16'
          gap='g4'
          onClick={onReset}
        >
          <ResetIcon />
          <span>상세필터 초기화</span>
        </Button>
        <Button type='button' onClick={onApply} styleType='filterButton' font='body_sb_16'>
          상세필터 적용하기
        </Button>
      </Row>
    </footer>
  );
};

export default FilterFooter;
