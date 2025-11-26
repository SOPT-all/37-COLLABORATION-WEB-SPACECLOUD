import { usePlaceListQuery } from '@widgets/space-card/api/usePlaceList.ts';
import PlaceCard from '@widgets/space-card/ui/placeCard/PlaceCard.tsx';
import * as S from '@widgets/space-card/ui/new/NewPlace.css';
import { LeftArrowButton, RightArrowButton } from '@shared/ui/arrowButton';

const NewPlaceSection = () => {
  const { data } = usePlaceListQuery();
  const newPlaces = data?.pages.flatMap((page) => page.data.result).slice(0, 3) ?? [];

  return (
    <section className={S.sectionWrapper}>
      <LeftArrowButton className={S.leftArrow} />
      {newPlaces?.map((place) => (
        <PlaceCard key={place.id} {...place} />
      ))}
      <RightArrowButton className={S.rightArrow} />
    </section>
  );
};

export default NewPlaceSection;
