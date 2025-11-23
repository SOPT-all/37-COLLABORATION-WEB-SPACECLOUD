import { useQuery } from '@tanstack/react-query';
import { fetchReviewList } from '@/shared/apis/review';
import type { ReviewListQueryParams, ReviewListResponse } from '@/shared/types/review';

const REVIEW_QUERY_KEY = ['reviews'] as const;

export const useReviewListQuery = (params?: ReviewListQueryParams) =>
  useQuery<ReviewListResponse>({
    queryKey: [...REVIEW_QUERY_KEY, params],
    queryFn: () => fetchReviewList(params),
  });
