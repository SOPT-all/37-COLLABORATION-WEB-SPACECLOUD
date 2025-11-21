import { useCallback, useEffect, useRef, useState } from 'react';

// initialCount: 처음에 몇 개까지 보여줄지
// batchSize: 한 번에 추가로 보여줄 카드 개수
interface UseInfiniteScrollOptions {
  initialCount: number;
  batchSize: number;
}

export const useInfiniteScroll = (total: number, options?: UseInfiniteScrollOptions) => {
  const { initialCount = 4, batchSize = 4 } = options ?? {};

  const dataKey = `${initialCount}-${total}`;

  const [visibleState, setVisibleState] = useState(() => ({
    key: dataKey,
    value: initialCount,
  }));
  const [infiniteModeKey, setInfiniteModeKey] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const currentVisibleCount = visibleState.key === dataKey ? visibleState.value : initialCount;
  const isInfiniteMode = infiniteModeKey === dataKey;

  const clampedVisibleCount = Math.min(currentVisibleCount, total);
  const hasMore = clampedVisibleCount < total;
  const initialVisibleCount = Math.min(initialCount, total);

  const bumpVisibleCount = useCallback(
    (count: number) => {
      setVisibleState((prev) => {
        const base = prev.key === dataKey ? prev.value : initialCount;
        const next = Math.min(total, base + count);
        if (prev.key === dataKey && prev.value === next) return prev;
        return { key: dataKey, value: next };
      });
    },
    [dataKey, initialCount, total],
  );

  useEffect(() => {
    if (!isInfiniteMode) return;
    if (!hasMore) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;

        bumpVisibleCount(batchSize);
      },
      { rootMargin: '100px 0px' },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [batchSize, bumpVisibleCount, hasMore, isInfiniteMode]);

  // 맨 처음에만 더보기 버튼 보여주기
  const showMoreButton = initialVisibleCount < total && !isInfiniteMode;

  const startInfiniteScroll = () => {
    setInfiniteModeKey(dataKey);
    bumpVisibleCount(batchSize);
  };

  return {
    visibleCount: clampedVisibleCount,
    hasMore,
    showMoreButton,
    sentinelRef,
    startInfiniteScroll,
    isInfiniteMode,
  };
};
