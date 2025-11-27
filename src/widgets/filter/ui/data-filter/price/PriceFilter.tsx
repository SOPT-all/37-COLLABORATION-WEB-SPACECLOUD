import * as S from '@widgets/filter/ui/data-filter/DataFilter.css.ts';
import { vars } from '@shared/styles/token.css.ts';
import Slider from '@shared/ui/slider/Slider.tsx';
import type { SliderValues } from '@shared/types/slider.ts';
import type { ChildrenProps } from '@shared/types/common.ts';
import { Column, Row } from '@shared/ui/layout';
import { MAX_PRICE, PRICE_STEP } from '@widgets/filter/config/price.config.ts';
import type { ChangeEvent } from 'react';

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
  handleChange: (range: [number, number]) => void;
};

const PriceFilterButtons = ({
  currentMinValue,
  currentMaxValue,
  handleChange,
}: PriceFilterButtonsProps) => {
  const parseNumber = (value: string) => {
    const n = Number(value.replace(/,/g, ''));
    return Number.isNaN(n) ? 0 : Math.max(n, 0);
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseNumber(e.target.value);
    // 현재 값이 최대 가격보다 클 때
    if (value > currentMaxValue) {
      // 현재 가격 - 금액 Step 이 0보다 작으면
      if (value - PRICE_STEP < 0) {
        // 음수가 아닌 0으로 세팅 후 종료
        handleChange([0, currentMaxValue]);
        return;
      }
      // 근데 현재 최대 금액이 +로 찍혀있으면
      if (currentMaxValue > MAX_PRICE) {
        // 최소 금액을 지정된 최대 금액인 MAX_PRICE - Step 으로 세팅 후 종료
        handleChange([MAX_PRICE - PRICE_STEP, currentMaxValue]);
        return;
      }
      // 다른 경우는 현재 최대 금액 - 금액 Step 으로 세팅 후 종료
      handleChange([currentMaxValue - PRICE_STEP, currentMaxValue]);
      return;
    }
    // 뭣도 아닌 경우는 그냥 세팅
    handleChange([Number(value), currentMaxValue]);
  };

  const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseNumber(e.target.value);
    handleChange([currentMinValue, Number(value)]);
  };

  const formatMaxValue = () => {
    if (currentMaxValue > MAX_PRICE) {
      return `${MAX_PRICE.toLocaleString()}+`;
    }
    return currentMaxValue.toLocaleString();
  };

  const handleMaxBlur = () => {
    if (currentMaxValue <= currentMinValue + PRICE_STEP) {
      handleChange([currentMinValue, currentMinValue + PRICE_STEP]);
    }
  };

  return (
    <Row align='center' justify='between'>
      <div className={S.inputWrapper}>
        <label htmlFor='minPriceInput' className={S.description.priceLabel}>
          최소가격
        </label>
        <Row align='center' justify='between' className={S.description.priceDetail} width='full'>
          <input
            id='minPriceInput'
            className={S.input}
            value={currentMinValue.toLocaleString()}
            placeholder={'0'}
            onChange={handleMinInputChange}
            type='text'
            inputMode='numeric'
          />
          <span>원</span>
        </Row>
      </div>
      <div className={S.inputWrapper}>
        <label htmlFor='maxPriceInput' className={S.description.priceLabel}>
          최대가격
        </label>
        <Row align='center' justify='between' className={S.description.priceDetail} width='full'>
          <input
            id='maxPriceInput'
            className={S.input}
            value={formatMaxValue()}
            onChange={handleMaxInputChange}
            onBlur={handleMaxBlur}
            type='text'
            inputMode='numeric'
          />
          <span>원</span>
        </Row>
      </div>
    </Row>
  );
};

const PriceFilter = Object.assign(PriceFilterRoot, {
  Slider: PriceSlider,
  Buttons: PriceFilterButtons,
});

export default PriceFilter;
