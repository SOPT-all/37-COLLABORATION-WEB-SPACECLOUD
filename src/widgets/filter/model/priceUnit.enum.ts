export const PRICE_UNIT = {
  HOUR: 'HOUR',
  MONTH: 'MONTH',
  PACKAGE: 'PACKAGE',
} as const;

export type PriceUnitType = (typeof PRICE_UNIT)[keyof typeof PRICE_UNIT];
