import type { ReviewListQueryParams } from '@/shared/types/review';

type ReviewListKey = ['reviews'] | ['reviews', ReviewListQueryParams];

export const queryKeys = {
  reviews: {
    list: (params?: ReviewListQueryParams): ReviewListKey =>
      params ? ['reviews', params] : ['reviews'],
  },
};
