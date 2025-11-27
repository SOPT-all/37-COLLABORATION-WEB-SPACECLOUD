import type { BaseApiResponse } from '@shared/types/common';

export type Space = {
  code: string;
  name: string;
};

export type CategoriesResponse = {
  workspace: Space[];
  gathering: Space[];
};

export type GroupType = keyof CategoriesResponse;
export type CategoriesApiResponse = BaseApiResponse<CategoriesResponse>;
