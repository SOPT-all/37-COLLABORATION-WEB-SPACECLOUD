import Filter from '@widgets/main-view/ui/Filter/Filter';
import Divider from '@shared/ui/divider/Divider';
import Banner from '@widgets/main-view/ui/Banner/Banner';
import MainTitle from '@widgets/main-view/ui/Header/MainTitle';
import SpaceCategory from '@widgets/space-filter/ui/tab/SpaceCategory.tsx';
import ReviewSection from '@widgets/review/ui/ReviewSection.tsx';
import SubTitle from '@shared/ui/subTitle/SubTitle';
import MagazineSection from '@widgets/magazine/ui/MagazineSection';
import { FetchBoundary } from '@shared/ui/boundary/FetchBoundary';
import NewPlaceSection from '@widgets/space-card/ui/new/NewPlaceSection.tsx';
import * as S from '@pages/home/ui/HomePage.css';
import Spacer from '@shared/ui/spacer/Spacer.tsx';
import ChatFloat from '@widgets/main-view/ui/chat-float/ChatFloat';
import ReviewSectionSkeleton from '@widgets/review/ui/ReviewSectionSkeleton.tsx';

const HomePage = () => {
  return (
    <>
      <MainTitle />

      {/* 4가지 필터 섹션 입니다. */}
      <Filter />

      <div className={S.dividerSpacing}>
        <Divider />
      </div>

      {/* 토클 필터 섹션 */}
      <FetchBoundary>
        <SpaceCategory />
      </FetchBoundary>

      <Spacer space='s56' />

      <Banner />

      <Spacer space='s52' />

      <SubTitle>새로 등록됐어요</SubTitle>
      <FetchBoundary>
        <NewPlaceSection />
      </FetchBoundary>

      <Spacer space='s52' />

      {/* 매거진 섹션 */}
      <SubTitle variant='small25'>
        <SubTitle.NewBadge>도시산책, 스페이스클라우드 매거진</SubTitle.NewBadge>
      </SubTitle>
      <FetchBoundary>
        <MagazineSection />
      </FetchBoundary>

      <Spacer space='s52' />

      {/* 후기 섹션 */}
      <SubTitle>방금 올라온 이용후기에요</SubTitle>
      <FetchBoundary loadingFallback={<ReviewSectionSkeleton />}>
        <ReviewSection />
      </FetchBoundary>
      <ChatFloat />
    </>
  );
};

export default HomePage;
