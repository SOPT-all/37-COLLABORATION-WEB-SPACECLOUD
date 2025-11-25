import dayjs from 'dayjs';
import type { FilterKey, FilterValue } from '../types/types';

// 필터 값에서 텍스트 추출
export const getValueText = (value: FilterValue): string => {
  if (!value) return '';
  if (typeof value === 'object') {
    return value.content;
  }
  return value;
};

// 표시할 텍스트 포맷팅
export const formatDisplayText = (key: FilterKey, value: FilterValue): string => {
  const text = getValueText(value);

  if (key === 'capacity') {
    return `${text}명`;
  }
  if (key === 'reservationDate') {
    return dayjs(text).format('M월 D일');
  }
  return text;
};
