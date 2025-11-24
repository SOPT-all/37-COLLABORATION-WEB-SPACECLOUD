import type { FilterState } from '@/widgets/space-filter/ui/MainFilter';
import type { SpaceFilterValue } from '@/shared/types/common';

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
