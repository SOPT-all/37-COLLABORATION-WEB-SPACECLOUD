import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchReviewList } from '@/shared/apis/review';
import type { ReviewListQueryParams, ReviewListResponse } from '@/shared/types/review';

const REVIEW_QUERY_KEY = ['reviews'] as const;
const INITIAL_PAGE = 1;

export const useReviewListQuery = (params?: ReviewListQueryParams) =>
  useInfiniteQuery<ReviewListResponse>({
    queryKey: [...REVIEW_QUERY_KEY, params],
    initialPageParam: INITIAL_PAGE,
    queryFn: ({ pageParam }) => {
      const currentPage = typeof pageParam === 'number' ? pageParam : INITIAL_PAGE;
      return fetchReviewList({ ...params, page: currentPage });
    },
    getNextPageParam: (lastPage, pages) =>
      lastPage.data.hasNext ? pages.length + INITIAL_PAGE : undefined,
  });
