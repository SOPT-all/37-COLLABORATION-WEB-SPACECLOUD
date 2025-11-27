import { kyInstance } from '@shared/apis/kyInstance';
import type { MagazineListResponse } from '@shared/types/magazine';

const MAGAZINE_ENDPOINT = 'api/v1/magazines';

export const fetchMagazineList = async () => {
  return kyInstance.get(MAGAZINE_ENDPOINT).json<MagazineListResponse>();
};
