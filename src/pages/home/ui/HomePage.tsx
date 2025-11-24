import MainFilter from '@/widgets/space-filter/ui/MainFilter';
import Button from '@/shared/ui/Button';
import { useFilterState } from '@/shared/libs/useFilterState';
import { useFilterSearch } from '@/shared/libs/useFilterSearch';

/**
 * 페이지의 전체적인 구조만을 잡았습니다.
 * 의미없는 div보다는
 * 시멘틱 태그를 이용해 의미를 부여해주시면 되겠습니다.
 */

const HomePage = () => {
  const { filter, handleFilterChange, isFilterEmpty } = useFilterState();
  const { handleSearch } = useFilterSearch(filter);

  return (
    <>
      {/* 메인 페이지 타이틀 영역입니다. */}
      <h1>작업부터 모임까지 어쩌구 저쩌구</h1>

      {/* 4가지 필터 섹션 입니다. */}
      <MainFilter filter={filter} onFilterChange={handleFilterChange}>
        <Button styleType='search' font='body_m_18' onClick={handleSearch} disabled={isFilterEmpty}>
          검색
        </Button>
      </MainFilter>

      {/* 토클 필터 섹션 */}
      <div>토클 필터입니닷</div>

      {/* 배너 섹션 */}
      <div>배너</div>

      {/* 새로 등록 섹션 */}
      <div>새로새로새로</div>

      {/* 매거진 섹션 */}
      <div>매거진매거진매거진</div>

      {/* 후기 섹션 */}
      <div>후기 섹션</div>
    </>
  );
};

export default HomePage;
