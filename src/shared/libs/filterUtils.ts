import type { FilterState } from '@/widgets/space-filter/ui/MainFilter';
import type { SpaceFilterValue } from '@/shared/types/common';
import { AREA_FILTERS } from '@/shared/configs/region';
import { dummy } from '@/shared/configs/space';

export const filterToSearchParams = (filter: FilterState): URLSearchParams => {
  const params = new URLSearchParams();

  Object.entries(filter).forEach(([key, value]) => {
    if (value) {
      if (typeof value === 'object') {
        const spaceFilterValue = value as SpaceFilterValue;
        if (spaceFilterValue.key) {
          params.append(key, spaceFilterValue.key);
        }
      } else {
        params.append(key, value);
      }
    }
  });

  return params;
};

export const findSpaceNameByCode = (code: string): string | null => {
  for (const space of Object.values(dummy)) {
    const result = space.find((item) => item.code === code);
    if (result) return result.name;
  }
  return null;
};

export const searchParamsToFilter = (params: URLSearchParams): FilterState => {
  const areaKey = params.get('location');
  const areaValue = areaKey ? AREA_FILTERS.find((item) => item.key === areaKey) || null : null;

  const spaceKey = params.get('filter');
  const spaceValue = spaceKey ? findSpaceNameByCode(spaceKey) : null;

  return {
    filter: spaceValue,
    location: areaValue,
    capacity: params.get('capacity'),
    reservationDate: params.get('reservationDate'),
  };
};
