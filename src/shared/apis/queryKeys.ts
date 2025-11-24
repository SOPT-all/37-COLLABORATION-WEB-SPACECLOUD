import type { ReviewListQueryParams } from '@/shared/types/review';

export const queryKeys = {
  REVIEWS: (params?: ReviewListQueryParams) => {
    const rest = { ...params };
    delete rest.page;
    return ['reviews', Object.keys(rest).length ? rest : 'all'] as const;
  },
} as const;
