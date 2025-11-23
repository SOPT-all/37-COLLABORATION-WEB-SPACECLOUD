import Button from '@shared/ui/Button.tsx';
import { IcFilter, IcMap } from '@shared/assets/icons/space-types';
import Row from '@shared/ui/layout/Row.tsx';
import { vars } from '@shared/styles/token.css.ts';
import { useModal } from '@shared/libs/useModal.tsx';
import DataFilter from '@widgets/filter/ui/data-filter/DataFilter.tsx';
import { useSearchParams } from 'react-router';

const FilterMapButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams;
  const { openModal } = useModal();

  const handleSearchParams = (params: URLSearchParams) => {
    setSearchParams(params, { replace: true });
  };

  const openMap = () => undefined;
  return (
    <Row gap={vars.space.s4} width='min'>
      <Button
        onClick={() =>
          openModal(
            <DataFilter handleSearchParams={handleSearchParams} currentParams={currentParams} />,
          )
        }
        styleType='dataFilter'
        font='body_sb_16'
        gap='g4'
      >
        <IcFilter aria-hidden={true} />
        <span>필터</span>
      </Button>
      <Button onClick={openMap} styleType='dataFilter' font='body_sb_16' gap='g4'>
        <IcMap aria-hidden={true} />
        <span>지도</span>
      </Button>
    </Row>
  );
};

export default FilterMapButtons;
