import * as React from 'react';
import type { SliderValues } from '@shared/types/slider.ts';

/**
 * 슬라이더 min, max 범위 제어를 위한 유틸 함수
 * - 최소/최대 값 이동시 경계값(minLimit, maxLimit)을 벗어나지 않도록 clamp 처리
 * - 두 핸들 사이 간격 보장하여, 서로 침범하지 않도록 안전 값 계산
 *
 * 반환:
 * - getPercent(value): number -> 퍼센트 계산
 * - handleMinChange(e, maxValue, onChange): 좌측 슬라이더 변경 핸들러
 * - handleMaxChange(e, minValue, onChange): 우측 슬라이더 변경 핸들러
 */
export const slider = ({ minLimit, maxLimit, step }: Omit<SliderValues, 'value' | 'onChange'>) => {
  const clamp = (value: number, minValue: number, maxValue: number) => {
    return Math.min(Math.max(value, minValue), maxValue);
  };

  // 현재 값이 전체 구간에서 몇 % 위치인지 계산 (UI 막대 너비 계산용)
  const getPercent = (v: number) => ((v - minLimit) / (maxLimit - minLimit)) * 100;

  // 좌측 핸들 이동 처리 (우측 핸들 - step 이하로 계산)
  const handleMinChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    maxValue: number,
    onChange: (value: [number, number]) => void,
  ) => {
    const raw = Number(e.target.value);
    // 좌 버튼 min 이상, 우 - step 이하
    const safeMin = clamp(raw, minLimit, maxValue - step);
    onChange([safeMin, maxValue]);
  };

  // 우측 핸들 이동 처리 (좌측 핸들 + step 이상으로 제한)
  const handleMaxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    minValue: number,
    onChange: (value: [number, number]) => void,
  ) => {
    const raw = Number(e.target.value);
    // 우 버튼은 좌 버튼 + step 이상, 전체 max 이하
    const safeMax = clamp(raw, minValue + step, maxLimit);
    onChange([minValue, safeMax]);
  };

  return {
    getPercent,
    handleMaxChange,
    handleMinChange,
  };
};
