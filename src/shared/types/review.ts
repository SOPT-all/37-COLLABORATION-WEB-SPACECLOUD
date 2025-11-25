import type { PriceUnitCode } from '@/shared/constants/priceUnit';
import type { BaseApiResponse } from '@/shared/types/common';

export interface ReviewCategory {
  code: string;
  name: string;
}

export interface ReviewItem {
  id: number;
  score: number;
  title: string;
  detail: string;
  reviewImageUrl: string;
  placeId: number;
  price: number;
  priceUnit: PriceUnitCode;
  categories: ReviewCategory[];
}

export interface ReviewListData {
  content: ReviewItem[];
  hasNext: boolean;
}

export type ReviewListResponse = BaseApiResponse<ReviewListData>;

export interface ReviewListQueryParams {
  page?: number;
}
