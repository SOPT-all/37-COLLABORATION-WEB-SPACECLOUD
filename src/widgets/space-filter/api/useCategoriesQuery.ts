import { queryKeys } from '@/shared/apis/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from './fetchCategories';

export const useCategoriesQuery = () => {
  return useQuery({
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
