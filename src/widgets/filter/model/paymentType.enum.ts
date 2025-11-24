export const PAYMENT_TYPE = {
  DIRECT: 'DIRECT',
  APPROVE: 'APPROVE',
} as const;

export type PaymentType = (typeof PAYMENT_TYPE)[keyof typeof PAYMENT_TYPE];
