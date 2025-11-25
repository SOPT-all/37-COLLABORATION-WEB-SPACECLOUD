import type { FilterState, FilterValue } from '@/widgets/space-filter/types/types';
import { AREA_FILTERS, type AreaKey } from '@/shared/configs/region';
import { dummy } from '@/widgets/space-filter/model/categories.mock';
import { typedEntries } from './object';

export const getValue = (value: FilterValue): string | null => {
  if (!value) return null;

  if (typeof value === 'object') {
    return value.key;
  }

  return value;
};

export const filterToSearchParams = (filter: FilterState): URLSearchParams => {
  const params = new URLSearchParams();

  typedEntries(filter).forEach(([key, value]) => {
    const curValue = getValue(value);
    if (curValue) {
      params.set(key, curValue);
    }
  });

  return params;
};

export const findSpaceNameByCode = (code: string): string | null => {
  const all = Object.values(dummy).flat();
  const rst = all.find((v) => v.code === code)?.name ?? null;
  return rst;
};

export const searchParamsToFilter = (params: URLSearchParams): FilterState => {
  const areaKey = params.get('location');
  const areaValue = areaKey ? AREA_FILTERS[areaKey as AreaKey] || null : null;

  const spaceKey = params.get('filter');
  const spaceValue = spaceKey ? findSpaceNameByCode(spaceKey) : null;

  return {
    filter: spaceValue,
    location: areaValue,
    capacity: params.get('capacity'),
    reservationDate: params.get('reservationDate'),
  };
};
