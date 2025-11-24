import Divider from '@/shared/ui/divider/Divider';
import Banner from '@/widgets/main-view/ui/Banner/Banner';
import MainTitle from '@/widgets/main-view/ui/Header/MainTitle';
import SpaceCategory from '@widgets/space-filter/ui/tab/SpaceCategory.tsx';
import ReviewSection from '@widgets/review/ui/ReviewSection.tsx';
import SubTitle from '@/shared/ui/subTitle/SubTitle';

const HomePage = () => {
  return (
    <>
      <MainTitle />

      {/* 4가지 필터 섹션 입니다. */}
      <div>필터</div>

      <Divider />

      {/* 토클 필터 섹션 */}
      <SpaceCategory />

      <Banner />

      {/* 새로 등록 섹션 */}
      <div>새로새로새로</div>

      {/* 매거진 섹션 */}
      <div>매거진매거진매거진</div>

      {/* 후기 섹션 */}
      <SubTitle>방금 올라온 이용후기에요</SubTitle>
      <ReviewSection />
    </>
  );
};

export default HomePage;
