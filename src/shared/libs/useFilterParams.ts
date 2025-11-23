import { useSearchParams } from 'react-router';

export const useFilterParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   * 필터 관련 URL 쿼리 파라미터를 안전하게 병합하는 유틸 함수입니다.
   *
   * - 현재 URLSearchParams를 복사하여 기반으로 사용합니다.
   * - filterTypeObject에 포함된 필터 키만 제거하고,
   *   nextFilterParams의 값들을 덮어써 특정 필터 영역만 갱신합니다.
   * - 그 외의 기존 쿼리는 유지됩니다.
   * - 최종 병합된 URLSearchParams로 setSearchParams를 호출하여
   *   라우터 URL 상태를 업데이트합니다.
   */
  const handleSearchParams = (
    nextFilterParams: URLSearchParams,
    filterTypeObject: Record<string, string>,
  ) => {
    // 기존 쿼리를 복사한다.
    const merged = new URLSearchParams(searchParams);

    // 이번 DataFilter가 관리하는 키들만 먼저 삭제한다.
    Object.values(filterTypeObject).forEach((key) => {
      merged.delete(key);
    });

    // 새 필터 값을 세팅한다.
    nextFilterParams.forEach((value, key) => {
      merged.set(key, value);
    });

    // 최종 머지된 쿼리로 교체한다.
    // 최종적으로 데이터 필테어서 설정하는 필터 외의 정보는 수정되지 않은채 반영된다.
    setSearchParams(merged, { replace: true });
  };

  return { searchParams, handleSearchParams };
};
