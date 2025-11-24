import { premiumZoneMocks } from '@/shared/mocks/premiumZone';
import { plusZoneMocks } from '@/shared/mocks/plusZone';
import FilterMapButtons from '@widgets/filter/ui/data-filter/button/FilterMapButtons.tsx';
import PlaceSection from '@/widgets/space-card/ui/PlaceSection';

const SearchPage = () => {
  return (
    <>
      {/* 필터 섹션입니다. */}
      <div>
        <FilterMapButtons />
      </div>

      {/*프리미엄존 섹션*/}
      <PlaceSection
        title='프리미엄존'
        subtitleVariant='large'
        showAdBadge
        places={premiumZoneMocks}
      />

      {/*플러스존 섹션*/}
      <PlaceSection
        title='플러스존'
        subtitleVariant='large'
        showAdBadge
        adBadgeIconGap='tight'
        places={plusZoneMocks}
      />

      {/* 공간 목록 영역입니다. */}
      <div>공간공간공간</div>
    </>
  );
};

export default SearchPage;
