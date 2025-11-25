import type { BaseApiResponse } from '@/shared/types/common';

export interface MagazineItem {
  id: number;
  title: string;
  magazineImageUrl: string;
}

export type MagazineListResponse = BaseApiResponse<MagazineItem[]>;
