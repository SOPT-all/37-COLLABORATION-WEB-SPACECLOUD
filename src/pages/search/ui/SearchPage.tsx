import FilterSection from '@widgets/search-view/ui/FilterSection';
import { premiumZoneMocks } from '@shared/mocks/premiumZone';
import { plusZoneMocks } from '@shared/mocks/plusZone';
import PlaceList from '@widgets/space-card/ui/list/PlaceList.tsx';
import PlaceSection from '@widgets/space-card/ui/PlaceSection';
import Divider from '@shared/ui/divider/Divider';
import * as s from './SearchPage.css';
import { FetchBoundary } from '@shared/ui/boundary/FetchBoundary';
import Spacer from '@shared/ui/spacer/Spacer.tsx';
import SubTitle from '@shared/ui/subTitle/SubTitle.tsx';

const SearchPage = () => {
  return (
    <>
      {/* 필터 섹션입니다. */}
      <FetchBoundary>
        <FilterSection />
      </FetchBoundary>

      <div className={s.dividerSpacing.top}>
        <Divider tone={'gray300'} />
      </div>

      {/*프리미엄존 섹션*/}
      <SubTitle variant='large'>
        <SubTitle.AdBadge iconGap='wide'>프리미엄존</SubTitle.AdBadge>
      </SubTitle>
      <PlaceSection subtitleVariant='large' places={premiumZoneMocks} />

      <Spacer space='s48' />

      {/*플러스존 섹션*/}
      <SubTitle variant='large'>
        <SubTitle.AdBadge iconGap='tight'>플러스존</SubTitle.AdBadge>
      </SubTitle>
      <PlaceSection subtitleVariant='large' places={plusZoneMocks} />

      <div className={s.dividerSpacing.bottom}>
        <Divider />
      </div>

      {/* 공간 목록 영역입니다. */}
      <FetchBoundary>
        <PlaceList />
      </FetchBoundary>
    </>
  );
};

export default SearchPage;
