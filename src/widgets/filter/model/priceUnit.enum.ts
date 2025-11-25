export const PRICE_UNIT = {
  HOUR: 'HOUR',
  MONTH: 'MONTH',
  DAY: 'DAY',
  PACKAGE: 'PACKAGE',
} as const;

export type PriceUnitType = (typeof PRICE_UNIT)[keyof typeof PRICE_UNIT];
