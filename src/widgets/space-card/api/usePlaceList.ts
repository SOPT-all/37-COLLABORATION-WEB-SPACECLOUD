import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from '@/shared/apis/queryKeys';
import type {
  PlaceSearchListResponse,
  PlaceSearchQueryParams,
} from '@widgets/space-card/model/place.types.ts';
import { fetchPlaceList } from '@widgets/space-card/api/fetchPlaceList.ts';

const INITIAL_PAGE = 1;

export const usePlaceListQuery = (params?: PlaceSearchQueryParams) =>
  useSuspenseInfiniteQuery<PlaceSearchListResponse>({
    queryKey: queryKeys.PLACE_LIST(params),
    initialPageParam: INITIAL_PAGE,
    queryFn: ({ pageParam }) => {
      const currentPage = typeof pageParam === 'number' ? pageParam : INITIAL_PAGE;
      return fetchPlaceList({ ...params, page: currentPage });
    },
    getNextPageParam: (lastPage, pages) =>
      lastPage.data.hasNext ? pages.length + INITIAL_PAGE : undefined,
  });
