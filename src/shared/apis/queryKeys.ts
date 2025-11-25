import type { ReviewListQueryParams } from '@/shared/types/review';
import type { PlaceSearchQueryParams } from '@widgets/space-card/model/place.types.ts';

export const queryKeys = {
  REVIEWS: (params?: ReviewListQueryParams) => {
    const rest = { ...params };
    delete rest.page;
    return ['reviews', Object.keys(rest).length ? rest : 'all'] as const;
  },
  PLACE_LIST: (params?: PlaceSearchQueryParams) => {
    const cleanedParams = Object.fromEntries(
      Object.entries(params ?? {}).filter(([, v]) => v !== undefined),
    );
    return [
      'places',
      {
        page: cleanedParams.page ?? 1,
        ...cleanedParams,
      },
    ];
  },
  MAGAZINES: 'magazines',
} as const;
