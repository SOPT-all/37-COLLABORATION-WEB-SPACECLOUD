import { kyInstance } from '@shared/apis/kyInstance.ts';
import type { ReviewListQueryParams, ReviewListResponse } from '@shared/types/review';

const REVIEW_ENDPOINT = 'api/v1/reviews';

export const fetchReviewList = async (params?: ReviewListQueryParams) => {
  const searchParams = params ? { page: params.page } : undefined;

  return kyInstance
    .get(REVIEW_ENDPOINT, {
      searchParams,
    })
    .json<ReviewListResponse>();
};
