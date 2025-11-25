import type { BaseApiResponse } from '@shared/types/common.ts';

export interface PlaceSearchQueryParams {
  page?: number;
  location?: string;
  priceMin?: number;
  priceMax?: number;
  priceUnit?: string;
  purchaseType?: string;
  capacity?: number;
  reservationDate?: string;
  filter?: string[];
  facility?: string[];
}

export interface PlaceSearchItem {
  id: number;
  name: string;
  capacity: number;
  commentCount: number;
  likeCount: number;
  price: number;
  priceUnit: 'HOUR' | 'MONTH' | 'PACKAGE';
  address: string;
  thumbnailImageUrl: string;
  coupon: boolean;
  hashtags: string[];
}

export interface PlaceSearchListData {
  result: PlaceSearchItem[];
  hasNext: boolean;
}

export type PlaceSearchListResponse = BaseApiResponse<PlaceSearchListData>;
