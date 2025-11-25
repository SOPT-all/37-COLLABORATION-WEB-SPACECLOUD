import { useSearchParams } from 'react-router';
import type { FilterKey, FilterValue } from '@/widgets/space-filter/types/types';
import { getValue, searchParamsToFilter } from './filterUtils';

export const useMainFilterParams = () => {
  const [params, setParams] = useSearchParams();
  const filter = searchParamsToFilter(params);

  const handleFilterChange = (key: FilterKey, value: FilterValue) => {
    const newParams = new URLSearchParams(params);
    const curValue = getValue(value);

    if (curValue) {
      newParams.set(key, curValue);
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
