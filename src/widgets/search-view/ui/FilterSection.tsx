import MainFilter from '@widgets/space-filter/ui/main-filter/MainFilter';
import FilterMapButtons from '@widgets/filter/ui/data-filter/button/FilterMapButtons';
import { Row } from '@shared/ui/layout';
import CouponBtn from '@widgets/filter-list/ui/coupon-btn/CouponBtn';
import SortMenu from '@widgets/filter-list/ui/sortMenu/SortMenu';
import { useMainFilterParams } from '@shared/libs/useMainFilterParams';
import { wrapper } from './FilterSection.css';
import { useCategoriesQuery } from '@widgets/space-filter/api/useCategoriesQuery';

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
      <Row justify='between' align='center'>
        <CouponBtn />
        <SortMenu />
      </Row>
    </section>
  );
};

export default FilterSection;
