import { useNavigate } from 'react-router';
import type { FilterState } from '@widgets/space-filter/types/types';
import { filterToSearchParams } from './filterUtils';

export const useMainFilterSearch = (filter: FilterState) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = filterToSearchParams(filter);
    navigate(`/search?${params.toString()}`);
  };

  return { handleSearch };
};
