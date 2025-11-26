import type { CSSProperties } from 'react';
import { useLayoutEffect, useState } from 'react';

export const useCalcPosition = (triggerEl: HTMLElement | undefined) => {
  const [style, setStyle] = useState<CSSProperties>();

  useLayoutEffect(() => {
    // 기준 요소 없으면 return
    if (!triggerEl) {
      return () => {
        setStyle(undefined);
      };
    }

    // 위치 계산
    const updatePosition = () => {
      // 기준 버튼의 화면상 좌표, 크기 가져오기
      const rect = triggerEl.getBoundingClientRect();
      // 계산된 좌표 triggerLocation 상태에 저장
      setStyle({
        position: 'fixed',
        top: `${rect.bottom + 8}px`,
        left: `${rect.left}px`,
        transform: 'none',
        margin: 0,
      });
    };

    // 최초 실행
    updatePosition();

    // 스크롤하면 다시 업데이트
    const handleScroll = () => updatePosition();
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', updatePosition);

    // 클린업 로직
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', updatePosition);
      setStyle(undefined);
    };
  }, [triggerEl]);

  return style;
};
