import MainFilter from '@/widgets/space-filter/ui/MainFilter';
import Button from '@/shared/ui/Button';
import { useEffect, useState } from 'react';
import type { FilterKey, FilterState, FilterValue } from '@/widgets/space-filter/ui/MainFilter';
import { useNavigate } from 'react-router';

/**
 * 페이지의 전체적인 구조만을 잡았습니다.
 * 의미없는 div보다는
 * 시멘틱 태그를 이용해 의미를 부여해주시면 되겠습니다.
 */

const HomePage = () => {
  const navigate = useNavigate();

  // 필터 선택 값 관리
  const [filter, setFilter] = useState<FilterState>({
    filter: null,
    location: null,
    capacity: null,
    reservationDate: null,
  });

  // 모달 내부 component로 넘길 필터값 업데이트 함수
  const handleFilterChange = (key: FilterKey, value: FilterValue) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  // 파라미터 설정 및 리스트 페이지로 이동
  const handleSearch = () => {
    const params = new URLSearchParams();

    Object.entries(filter).forEach(([key, value]) => {
      if (value) {
        if (typeof value === 'object') {
          if (value.key) {
            params.append(key, value.key);
          } else return;
        } else {
          params.append(key, value);
        }
      }
    });

    navigate(`/search?${params.toString()}`);
  };

  const disabled = Object.values(filter).every((value) => value === null);

  useEffect(() => {
    console.log('필터값: ', filter);
  }, [filter]);

  return (
    <>
      {/* 메인 페이지 타이틀 영역입니다. */}
      <h1>작업부터 모임까지 어쩌구 저쩌구</h1>

      {/* 4가지 필터 섹션 입니다. */}
      <MainFilter filter={filter} onFilterChange={handleFilterChange}>
        <Button styleType='search' font='body_m_18' onClick={handleSearch} disabled={disabled}>
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
