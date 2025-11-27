import { queryKeys } from '@shared/apis/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchCategories } from './fetchCategories';
import type { CategoriesApiResponse, CategoriesResponse } from '../model/categories.type';

export const useCategoriesQuery = () => {
  return useSuspenseQuery<CategoriesApiResponse, Error, CategoriesResponse>({
    queryKey: queryKeys.CATEGORIES(),
    queryFn: fetchCategories,
    select: (res) => res.data,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};
