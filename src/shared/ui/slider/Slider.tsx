import * as S from '@shared/ui/slider/slider.css.ts';
import clsx from 'clsx';
import { slider } from '@shared/libs/slider.ts';
import type { SliderValues } from '@shared/types/slider.ts';

type SliderProps = SliderValues;

const Slider = ({ minLimit, maxLimit, step, value, onChange }: SliderProps) => {
  // 슬라이더 최소, 최대
  const [minValue, maxValue] = value;
  // 슬라이더 제어 함수
  const { getPercent, handleMaxChange, handleMinChange } = slider({
    minLimit,
    maxLimit,
    step,
  });

  // 활성화 범위를 표시하기 위한 좌우 퍼센트 값 계산
  const minPercent = getPercent(minValue);
  const maxPercent = getPercent(maxValue);

  return (
    <div className={S.slider}>
      {/* 트랙 */}
      <div className={S.track} />

      {/* 활성화 범위 */}
      <div
        className={S.range}
        style={{
          left: `${minPercent}%`,
          width: `${maxPercent - minPercent}%`,
        }}
      />

      {/* 최소 금액 조절 */}
      <input
        className={clsx(S.thumb, S.thumbMin)}
        type='range'
        value={minValue}
        min={minLimit}
        max={maxLimit}
        step={step}
        onChange={(e) => handleMinChange(e, maxValue, onChange)}
      />

      {/* 최대 금액 조절 */}
      <input
        className={clsx(S.thumb, S.thumbMax)}
        type='range'
        value={maxValue}
        min={minLimit}
        max={maxLimit}
        step={step}
        onChange={(e) => handleMaxChange(e, minValue, onChange)}
      />
    </div>
  );
};

export default Slider;
