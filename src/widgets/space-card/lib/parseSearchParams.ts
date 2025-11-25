import type { PlaceSearchQueryParams } from '@widgets/space-card/model/place.types.ts';

export const parseSearchParams = (searchParams: URLSearchParams): PlaceSearchQueryParams => {
  const num = (value: string | null) => (value ? Number(value) : null);

  return {
    page: num(searchParams.get('page')) ?? 1,
    location: searchParams.get('location') ?? undefined,
    priceMin: num(searchParams.get('priceMin')) ?? undefined,
    priceMax: num(searchParams.get('priceMax')) ?? undefined,
    priceUnit: searchParams.get('priceUnit') ?? undefined,
    facility: searchParams.getAll('facility') ?? undefined,
    filter: searchParams.getAll('filter') ?? undefined,
    purchaseType: searchParams.get('purchaseType') ?? undefined,
    capacity: num(searchParams.get('capacity')) ?? undefined,
    reservationDate: searchParams.get('reservationDate') ?? undefined,
  };
};
