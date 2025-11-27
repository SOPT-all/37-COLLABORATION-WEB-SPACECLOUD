import { kyInstance } from '@shared/apis/kyInstance';
import type { CategoriesApiResponse } from '../model/categories.type';

const CATEGORY_ENDPOINT = 'api/v1/place/categories';

export const fetchCategories = async () => {
  return kyInstance.get(CATEGORY_ENDPOINT).json<CategoriesApiResponse>();
};
