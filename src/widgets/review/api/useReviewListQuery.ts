import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchReviewList } from '@/shared/apis/review';
import { queryKeys } from '@/shared/apis/queryKeys';
import type { ReviewListQueryParams, ReviewListResponse } from '@/shared/types/review';

const INITIAL_PAGE = 1;

export const useReviewListQuery = (params?: ReviewListQueryParams) =>
  useInfiniteQuery<ReviewListResponse>({
    queryKey: params ? [queryKeys.REVIEWS, params] : [queryKeys.REVIEWS],
    initialPageParam: INITIAL_PAGE,
    queryFn: ({ pageParam }) => {
      const currentPage = typeof pageParam === 'number' ? pageParam : INITIAL_PAGE;
      return fetchReviewList({ ...params, page: currentPage });
    },
    getNextPageParam: (lastPage, pages) =>
      lastPage.data.hasNext ? pages.length + INITIAL_PAGE : undefined,
  });
