import ReviewSection from '@widgets/review/ui/ReviewSection.tsx';
import SubTitle from '@/shared/ui/subTitle/SubTitle';

const HomePage = () => {
  return (
    <>
      {/* 메인 페이지 타이틀 영역입니다. */}
      <h1>작업부터 모임까지 어쩌구 저쩌구</h1>

      {/* 4가지 필터 섹션 입니다. */}
      <div>필터</div>

      {/* 토클 필터 섹션 */}
      <div>토클 필터입니닷</div>

      {/* 배너 섹션 */}
      <div>배너</div>

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
