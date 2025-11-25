import MainFilter from '@/widgets/space-filter/ui/MainFilter';
import Button from '@/shared/ui/Button';
import { useMainFilterState } from '@/shared/libs/useMainFilterState';
import { useMainFilterSearch } from '@/shared/libs/useMainFilterSearch';

const Filter = () => {
  const { filter, handleFilterChange, isFilterEmpty } = useMainFilterState();
  const { handleSearch } = useMainFilterSearch(filter);

  return (
    <MainFilter filter={filter} onFilterChange={handleFilterChange}>
      <Button styleType='search' font='body_m_18' onClick={handleSearch} disabled={isFilterEmpty}>
        검색
      </Button>
    </MainFilter>
  );
};

export default Filter;
