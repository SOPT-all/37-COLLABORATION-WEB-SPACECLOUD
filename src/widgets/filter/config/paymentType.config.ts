import type { PaymentType } from '@widgets/filter/model/paymentType.enum.ts';

export const PAYMENT_TYPE_META = {
  DIRECT: {
    label: '바로 결제',
    description: `결제 후 바로 예약이 확정되어\n당일 이용이 가능해요`,
  },
  APPROVE: {
    label: '승인 결제',
    description: `호스트님의 예약 승인 후\n예약이 확정돼요`,
  },
} as const satisfies Record<PaymentType, { label: string; description: string }>;
