import { useSearchParams } from 'react-router';
import MainFilter, { type FilterKey, type FilterValue } from '@/widgets/space-filter/ui/MainFilter';
import { AREA_FILTERS } from '@/shared/configs/region';
import FilterMapButtons from '@widgets/filter/ui/FilterMapButtons.tsx';
import { dummy } from '@/shared/configs/space';

const SearchPage = () => {
  const [params, setParams] = useSearchParams();
  const areaKey = params.get('location');
  const areaValue = areaKey ? AREA_FILTERS.find((item) => item.key === areaKey) || null : null;
  const spaceKey = params.get('filter');
  const findSpaceValue = (code: string) => {
    for (const space of Object.values(dummy)) {
      const rst = space.find((item) => item.code === code);
      if (rst) return rst.name;
    }
    return null;
  };
  const spaceValue = spaceKey ? findSpaceValue(spaceKey) : null;

  const curFilter = {
    filter: spaceValue,
    location: areaValue,
    capacity: params.get('capacity'),
    reservationDate: params.get('reservationDate'),
  };

  console.log(curFilter, 'ii');

  const handleChange = (key: FilterKey, value: FilterValue) => {
    const newParams = new URLSearchParams(params);

    if (value) {
      if (typeof value === 'object') {
        // 지역 필터에서 key가 null이면 서울 전체가 저장된 상태라 URL에서 삭제 필요
        if (value.key === null) {
          newParams.delete(key);
          return;
        }
        newParams.set(key, value.key);
      } else {
        newParams.set(key, value);
      }
    } else {
      newParams.delete(key);
    }

    setParams(newParams);
  };
  return (
    <>
      {/* 필터 섹션입니다. */}
      <div>
        <MainFilter filter={curFilter} onFilterChange={handleChange}>
          <FilterMapButtons />
        </MainFilter>
        <FilterMapButtons />
      </div>

      {/*프리미엄존 섹션입니다*/}
      <div>프리미엄프리미엄</div>

      {/*플러스존 섹션입니다.*/}
      <div>플러시존플러스</div>

      {/* 공간 목록 영역입니다. */}
      <div>공간공간공간</div>
    </>
  );
};

export default SearchPage;
