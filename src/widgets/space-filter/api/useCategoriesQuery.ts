import { queryKeys } from '@/shared/apis/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchCategories } from './fetchCategories';

export const useCategoriesQuery = () => {
  return useSuspenseQuery({
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
