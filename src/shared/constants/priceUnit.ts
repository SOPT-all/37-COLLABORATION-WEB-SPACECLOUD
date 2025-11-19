export const PRICE_UNIT_TEXT = {
  HOUR: '시간',
  MONTH: '월',
  PACKAGE: '패키지',
} as const;

export type PriceUnitCode = keyof typeof PRICE_UNIT_TEXT;

export const getPriceUnitLabel = (unit: PriceUnitCode) => PRICE_UNIT_TEXT[unit];
