import { usePlaceListQuery } from '@widgets/space-card/api/usePlaceList.ts';
import PlaceSection from '@widgets/space-card/ui/PlaceSection.tsx';

const NewPlaceSection = () => {
  const { data } = usePlaceListQuery();
  const newPlaces = data?.pages.flatMap((page) => page.data.result).slice(0, 6) ?? [];

  return (
    <>
      <PlaceSection places={newPlaces} />
    </>
  );
};

export default NewPlaceSection;
