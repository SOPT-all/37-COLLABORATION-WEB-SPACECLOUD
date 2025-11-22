import * as S from '@widgets/filter/ui/data-filter/DataFilter.css.ts';
import Button from '@shared/ui/Button.tsx';
import type { ChildrenProps } from '@shared/types/common.ts';
import { vars } from '@shared/styles/token.css.ts';
import { Row } from '@shared/ui/layout';

type PriceUnitFilterProps = ChildrenProps & {
  heading: string;
};

const PriceUnitFilterRoot = ({ children, heading }: PriceUnitFilterProps) => {
  return (
    <section className={S.section()}>
      <h3 className={S.label.heading}>{heading}</h3>
      <Row width='full' gap={vars.space.s8} className={S.wrapper.priceUnit}>
        {children}
      </Row>
    </section>
  );
};

type PriceUnitButtonProps = {
  label: string;
  onClick?: () => void;
  active?: boolean;
};

const PriceUnitButton = ({ label, onClick, active }: PriceUnitButtonProps) => {
  return (
    <Button
      onClick={onClick}
      type='button'
      styleType={active ? 'priceUnitActive' : 'priceUnit'}
      font='body_m_12'
    >
      {label}
    </Button>
  );
};

const PriceUnitFilter = Object.assign(PriceUnitFilterRoot, { Button: PriceUnitButton });

export default PriceUnitFilter;
