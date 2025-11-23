import type { BaseApiResponse } from '@/shared/types/common';

export interface MagazineItem {
  id: number;
  title: string;
  magazineImageUrl: string;
}

export interface MagazineListData {
  content: MagazineItem[];
}

export type MagazineListResponse = BaseApiResponse<MagazineListData>;
