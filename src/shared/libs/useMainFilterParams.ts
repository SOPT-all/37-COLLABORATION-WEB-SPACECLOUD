import { useSearchParams } from 'react-router';
import { getValue, searchParamsToFilter } from './filterUtils';
import type { FilterKey, FilterValue } from '@/widgets/space-filter/types/types';
import type { CategoriesResponse } from '@/widgets/space-filter/model/categories.type';

export const useMainFilterParams = (categories: CategoriesResponse) => {
  const [params, setParams] = useSearchParams();
  const filter = searchParamsToFilter(params, categories);

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
