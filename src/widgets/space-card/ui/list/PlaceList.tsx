import { useSearchParams } from 'react-router';
import { usePlaceListQuery } from '@widgets/space-card/api/usePlaceList.ts';
import { parseSearchParams } from '@widgets/space-card/lib/parseSearchParams.ts';
import { useIntersectionObserver } from '@shared/hooks/useIntersectionObserver.ts';
import * as S from '@widgets/space-card/ui/list/PlaceList.css.ts';
import PlaceCard from '@widgets/space-card/ui/placeCard/PlaceCard.tsx';

const PlaceList = () => {
  const [searchParams] = useSearchParams();
  const parsedParams = parseSearchParams(searchParams);
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = usePlaceListQuery(parsedParams);
  const placeList = data?.pages.flatMap((page) => page.data.result) ?? [];

  const handleIntersect = () => {
    if (!hasNextPage || isFetchingNextPage) return;
    fetchNextPage();
  };

  const sentinelRef = useIntersectionObserver<HTMLDivElement>({
    onIntersect: handleIntersect,
    enabled: hasNextPage,
    rootMargin: '100px 0px',
  });

  return (
    <section className={S.placeList}>
      {placeList.map((place) => (
        <PlaceCard key={`place-${place.id}`} {...place} />
      ))}
      <div ref={sentinelRef} className={S.sentinel} aria-hidden />
    </section>
  );
};

export default PlaceList;
