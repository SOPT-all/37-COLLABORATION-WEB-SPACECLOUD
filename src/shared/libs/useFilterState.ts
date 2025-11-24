import { useState, useMemo } from 'react';
import type { FilterKey, FilterState, FilterValue } from '@/widgets/space-filter/ui/MainFilter';

const initialFilterState: FilterState = {
  filter: null,
  location: null,
  capacity: null,
  reservationDate: null,
};

export const useFilterState = () => {
  const [filter, setFilter] = useState<FilterState>(initialFilterState);

  const handleFilterChange = (key: FilterKey, value: FilterValue) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  const isFilterEmpty = useMemo(
    () => Object.values(filter).every((value) => value === null),
    [filter],
  );

  return {
    filter,
    handleFilterChange,
    isFilterEmpty,
  };
};
