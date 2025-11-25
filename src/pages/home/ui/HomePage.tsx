import Divider from '@/shared/ui/divider/Divider';
import Banner from '@/widgets/main-view/ui/Banner/Banner';
import MainTitle from '@/widgets/main-view/ui/Header/MainTitle';
import SpaceCategory from '@widgets/space-filter/ui/tab/SpaceCategory.tsx';
import ReviewSection from '@widgets/review/ui/ReviewSection.tsx';
import SubTitle from '@/shared/ui/subTitle/SubTitle';

import MagazineSection from '@/widgets/magazine/ui/MagazineSection';

/**
 * 페이지의 전체적인 구조만을 잡았습니다.
 * 의미없는 div보다는
 * 시멘틱 태그를 이용해 의미를 부여해주시면 되겠습니다.
 */
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
      <MagazineSection />

      {/* 후기 섹션 */}
      <SubTitle>방금 올라온 이용후기에요</SubTitle>
      <ReviewSection />
    </>
  );
};

export default HomePage;
