import FilterSection from '@/widgets/search-view/ui/FilterSection';
import { premiumZoneMocks } from '@/shared/mocks/premiumZone';
import { plusZoneMocks } from '@/shared/mocks/plusZone';
import MainFilter from '@/widgets/space-filter/ui/MainFilter';
import { useMainFilterParams } from '@/shared/libs/useMainFilterParams';
import FilterMapButtons from '@widgets/filter/ui/data-filter/button/FilterMapButtons.tsx';
import PlaceSection from '@/widgets/space-card/ui/PlaceSection';
import Divider from '@/shared/ui/divider/Divider';
import * as s from './SearchPage.css';

const SearchPage = () => {
  return (
    <>
      {/* 필터 섹션입니다. */}
      <FilterSection />

      <div className={s.premiumPlusSpacing}>
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
      </div>

      <div className={s.dividerSpacing}>
        <Divider />
      </div>

      {/* 공간 목록 영역입니다. */}
      <div>공간공간공간</div>
    </>
  );
};

export default SearchPage;
