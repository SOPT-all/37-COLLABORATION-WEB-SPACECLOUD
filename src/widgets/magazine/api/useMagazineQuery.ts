import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchMagazineList } from '@/widgets/magazine/api/magazine';
import { queryKeys } from '@/shared/apis/queryKeys';
import type { MagazineListResponse } from '@/shared/types/magazine';

export const useMagazineListQuery = () =>
  useSuspenseQuery<MagazineListResponse>({
    queryKey: [queryKeys.MAGAZINES],
    queryFn: fetchMagazineList,
  });
