import FilterMapButtons from '@widgets/filter/ui/data-filter/button/FilterMapButtons.tsx';
import PlaceList from '@widgets/space-card/ui/list/PlaceList.tsx';

const SearchPage = () => {
  return (
    <>
      {/* 필터 섹션입니다. */}
      <div>
        <FilterMapButtons />
      </div>

      {/*프리미엄존 섹션입니다*/}
      <div>프리미엄프리미엄</div>

      {/*플러스존 섹션입니다.*/}
      <div>플러시존플러스</div>

      {/* 공간 목록 영역입니다. */}
      <PlaceList />
    </>
  );
};

export default SearchPage;
