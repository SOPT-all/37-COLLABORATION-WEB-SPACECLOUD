import { useQuery } from '@tanstack/react-query';
import { fetchMagazineList } from '@/shared/apis/magazine';
import { queryKeys } from '@/shared/apis/queryKeys';
import type { MagazineListResponse } from '@/shared/types/magazine';

export const useMagazineListQuery = () => {
  useQuery<MagazineListResponse>({
    queryKey: [queryKeys.MAGAZINES],
    queryFn: fetchMagazineList,
  });
};
