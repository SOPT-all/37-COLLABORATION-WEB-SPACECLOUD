import { useNavigate } from 'react-router';
import type { FilterState } from '@/widgets/space-filter/ui/MainFilter';
import { filterToSearchParams } from './filterUtils';

export const useFilterSearch = (filter: FilterState) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = filterToSearchParams(filter);
    navigate(`/search?${params.toString()}`);
  };

  return { handleSearch };
};
