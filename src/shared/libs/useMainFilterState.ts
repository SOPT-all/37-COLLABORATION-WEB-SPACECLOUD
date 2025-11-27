import { useState } from 'react';
import type { FilterKey, FilterState, FilterValue } from '@widgets/space-filter/types/types';

const initialFilterState: FilterState = {
  filter: null,
  location: null,
  capacity: null,
  reservationDate: null,
};

export const useMainFilterState = () => {
  const [filter, setFilter] = useState<FilterState>(initialFilterState);

  const handleFilterChange = (key: FilterKey, value: FilterValue) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  const isFilterEmpty = Object.values(filter).every((value) => value === null);

  return {
    filter,
    handleFilterChange,
    isFilterEmpty,
  };
};
