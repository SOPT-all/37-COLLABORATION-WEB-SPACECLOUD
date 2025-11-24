import { useSearchParams } from 'react-router';
import type { FilterKey, FilterValue } from '@/widgets/space-filter/ui/MainFilter';
import { searchParamsToFilter } from './filterUtils';
import type { SpaceFilterValue } from '@/shared/types/common';

export const useFilterParams = () => {
  const [params, setParams] = useSearchParams();
  const filter = searchParamsToFilter(params);

  const handleFilterChange = (key: FilterKey, value: FilterValue) => {
    const newParams = new URLSearchParams(params);

    if (value) {
      if (typeof value === 'object') {
        const spaceFilterValue = value as SpaceFilterValue;
        if (spaceFilterValue.key) {
          newParams.set(key, spaceFilterValue.key);
        }
      } else {
        newParams.set(key, value);
      }
    } else {
      newParams.delete(key);
    }

    setParams(newParams);
  };

  return {
    filter,
    handleFilterChange,
  };
};
