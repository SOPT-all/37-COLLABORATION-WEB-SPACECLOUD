import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { fetchReviewList } from './fetchReviewList';
import { queryKeys } from '@shared/apis/queryKeys';
import type { ReviewListQueryParams, ReviewListResponse } from '@shared/types/review';

const INITIAL_PAGE = 1;

export const useReviewListQuery = (params?: ReviewListQueryParams) =>
  useSuspenseInfiniteQuery<ReviewListResponse>({
    queryKey: queryKeys.REVIEWS(params),
    initialPageParam: INITIAL_PAGE,
    queryFn: ({ pageParam }) => {
      const currentPage = typeof pageParam === 'number' ? pageParam : INITIAL_PAGE;
      return fetchReviewList({ ...params, page: currentPage });
    },
    getNextPageParam: (lastPage, pages) =>
      lastPage.data.hasNext ? pages.length + INITIAL_PAGE : undefined,
  });
