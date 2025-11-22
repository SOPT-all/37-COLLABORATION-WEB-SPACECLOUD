import * as S from '@widgets/filter/ui/data-filter/DataFilter.css.ts';
import { vars } from '@shared/styles/token.css.ts';
import Slider from '@shared/ui/slider/Slider.tsx';
import type { SliderValues } from '@shared/types/slider.ts';
import type { ChildrenProps } from '@shared/types/common.ts';
import { Column, Row } from '@shared/ui/layout';
import Button from '@shared/ui/Button.tsx';

type PriceFilterProps = ChildrenProps;

const PriceFilterRoot = ({ children }: PriceFilterProps) => {
  return (
    <section className={S.section({ gap: 'normal' })}>
      <Column gap={vars.space.s4}>
        <h3 className={S.label.heading}>가격</h3>
        <span className={S.description.price}>가격 검색의 최소 단위는 5,000원입니다.</span>
      </Column>
      {children}
    </section>
  );
};

type PriceSliderProps = SliderValues;

const PriceSlider = ({ maxLimit, minLimit, step, value, onChange }: PriceSliderProps) => {
  return (
    <Slider minLimit={minLimit} maxLimit={maxLimit} step={step} value={value} onChange={onChange} />
  );
};

type PriceFilterButtonsProps = {
  currentMinValue: number;
  currentMaxValue: number;
};

const PriceFilterButtons = ({ currentMinValue, currentMaxValue }: PriceFilterButtonsProps) => {
  return (
    <Row align='center' justify='between'>
      <Button type='button' styleType='priceFilter' width='auto' gap='g6'>
        <p className={S.description.priceLabel}>최소가격</p>
        <Row align='center' justify='between' className={S.description.priceDetail} width='full'>
          <span>{`${currentMinValue.toLocaleString()}`}</span>
          <span>원</span>
        </Row>
      </Button>
      <Button type='button' styleType='priceFilter' width='auto'>
        <p className={S.description.priceLabel}>최대가격</p>
        <Row align='center' justify='between' className={S.description.priceDetail} width='full'>
          <span>{`${currentMaxValue.toLocaleString()}`}</span>
          <span>원</span>
        </Row>
      </Button>
    </Row>
  );
};

const PriceFilter = Object.assign(PriceFilterRoot, {
  Slider: PriceSlider,
  Buttons: PriceFilterButtons,
});

export default PriceFilter;
