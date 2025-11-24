import SubTitle from '@shared/ui/subTitle/SubTitle';
import FilterMapButtons from '@widgets/filter/ui/data-filter/button/FilterMapButtons.tsx';

const SearchPage = () => {
  return (
    <>
      {/* 필터 섹션입니다. */}
      <div>
        <FilterMapButtons />
      </div>

      {/*프리미엄존 섹션*/}
      <SubTitle variant='large'>
        <SubTitle.AdBadge>프리미엄존</SubTitle.AdBadge>
      </SubTitle>

      {/*플러스존 섹션*/}
      <SubTitle variant='large'>
        <SubTitle.AdBadge iconGap='tight'>플러스존</SubTitle.AdBadge>
      </SubTitle>

      {/* 공간 목록 영역입니다. */}
      <div>공간공간공간</div>
    </>
  );
};

export default SearchPage;
