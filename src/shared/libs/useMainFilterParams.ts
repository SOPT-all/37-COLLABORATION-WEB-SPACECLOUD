import { useSearchParams } from 'react-router';
import type { FilterKey, FilterValue, SpaceFilterValue } from '@/widgets/space-filter/types/types';
import { searchParamsToFilter } from './filterUtils';

export const useMainFilterParams = () => {
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
