import MainFilter from '@/widgets/space-filter/ui/MainFilter';
import { useMainFilterParams } from '@/shared/libs/useMainFilterParams';
import FilterMapButtons from '@widgets/filter/ui/data-filter/button/FilterMapButtons.tsx';

const SearchPage = () => {
  const { filter, handleFilterChange } = useMainFilterParams();
  return (
    <>
      {/* 필터 섹션입니다. */}
      <div>
        <MainFilter filter={filter} onFilterChange={handleFilterChange}>
          <FilterMapButtons />
        </MainFilter>
      </div>

      {/*프리미엄존 섹션입니다*/}
      <div>프리미엄프리미엄</div>

      {/*플러스존 섹션입니다.*/}
      <div>플러시존플러스</div>

      {/* 공간 목록 영역입니다. */}
      <div>공간공간공간</div>
    </>
  );
};

export default SearchPage;
