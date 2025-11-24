import * as S from '@widgets/filter/ui/data-filter/DataFilter.css.ts';
import { Column, Row } from '@shared/ui/layout';
import { vars } from '@shared/styles/token.css.ts';
import Button from '@shared/ui/Button.tsx';
import ImgVoltage from '@shared/assets/img/img-voltage.png';
import type { ChildrenProps } from '@shared/types/common.ts';
import type { PaymentType } from '@widgets/filter/model/paymentType.enum.ts';

type PaymentTypeFilterProps = ChildrenProps;

const PaymentTypeFilterRoot = ({ children }: PaymentTypeFilterProps) => {
  return (
    <section className={S.section()}>
      <h3 className={S.label.heading}>결제유형</h3>
      <Row gap={vars.space.s12}>{children}</Row>
    </section>
  );
};

type PaymentTypeButtonProps = {
  paymentType: PaymentType;
  label: string;
  description: string;
  onClick?: () => void;
  isActive: boolean;
};

const PaymentTypeButton = ({
  paymentType,
  label,
  description,
  isActive,
  onClick,
}: PaymentTypeButtonProps) => {
  return (
    <Button
      type='button'
      width='full'
      styleType={isActive ? 'paymentTypeActive' : 'paymentType'}
      onClick={onClick}
    >
      <Column justify='center' align='start' gap={vars.space.s8}>
        <Row gap={vars.space.s2}>
          <h5 className={S.label.subHeading}>{label}</h5>
          {paymentType === 'DIRECT' && (
            <img
              src={ImgVoltage}
              style={{ width: '16px' }}
              alt='바로 결제 아이콘'
              aria-hidden='true'
            />
          )}
        </Row>
        <p className={S.description.payment}>{description}</p>
      </Column>
    </Button>
  );
};

const PaymentTypeFilter = Object.assign(PaymentTypeFilterRoot, { Button: PaymentTypeButton });

export default PaymentTypeFilter;
