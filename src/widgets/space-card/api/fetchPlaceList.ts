import type {
  PlaceSearchListResponse,
  PlaceSearchQueryParams,
} from '@widgets/space-card/model/place.types.ts';
import { kyInstance } from '@shared/apis/kyInstance.ts';

const PLACE_SEARCH_ENDPOINT = 'api/v1/place/search';

export const fetchPlaceList = async (params: PlaceSearchQueryParams) => {
  const {
    location,
    priceMin,
    priceMax,
    priceUnit,
    page,
    filter,
    facility,
    reservationDate,
    purchaseType,
    capacity,
  } = params;

  return kyInstance
    .get(PLACE_SEARCH_ENDPOINT, {
      searchParams: {
        location,
        priceMin,
        priceMax,
        priceUnit,
        page,
        filter: filter?.join(','),
        facility: facility?.join(','),
        reservationDate,
        purchaseType,
        capacity,
      },
    })
    .json<PlaceSearchListResponse>();
};
