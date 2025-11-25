import MainFilter from '@/widgets/space-filter/ui/main-filter/MainFilter';
import FilterMapButtons from '@/widgets/filter/ui/data-filter/button/FilterMapButtons';
import FilterList from '@/widgets/filter-list/ui/FilterList';
import { useMainFilterParams } from '@/shared/libs/useMainFilterParams';
import { wrapper } from './FilterSection.css';
import { useCategoriesQuery } from '@/widgets/space-filter/api/useCategoriesQuery';

const FilterSection = () => {
  const { data: categories } = useCategoriesQuery();
  const { filter, handleFilterChange } = useMainFilterParams(
    categories ?? { workspace: [], gathering: [] },
  );

  return (
    <section className={wrapper}>
      <MainFilter filter={filter} onFilterChange={handleFilterChange}>
        <FilterMapButtons />
      </MainFilter>
      <FilterList />
    </section>
  );
};

export default FilterSection;
