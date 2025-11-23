import { kyInstance } from './kyInstance.ts';
import type { ReviewListQueryParams, ReviewListResponse } from '@/shared/types/review';

const REVIEW_ENDPOINT = 'api/v1/reviews';

// 리뷰 목록 가져오기
export const fetchReviewList = async (params?: ReviewListQueryParams) => {
  const searchParams = params ? { page: params.page } : undefined;

  return kyInstance
    .get(REVIEW_ENDPOINT, {
      searchParams,
    })
    .json<ReviewListResponse>();
};
