import MagazineSection from '@/widgets/magazine/ui/MagazineSection';
import Banner from '@/widgets/main-view/ui/Banner/Banner';
import MainTitle from '@/widgets/main-view/ui/Header/MainTitle';

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

      {/* 토클 필터 섹션 */}
      <div>토클 필터입니닷</div>

      {/* 배너 섹션 */}
      <Banner />

      {/* 새로 등록 섹션 */}
      <div>새로새로새로</div>

      {/* 매거진 섹션 */}
      <MagazineSection />

      {/* 후기 섹션 */}
      <div>후기 섹션</div>
    </>
  );
};

export default HomePage;
