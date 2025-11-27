import PlaceCardSkeleton from '@widgets/space-card/ui/placeCard/PlaceCardSkeleton.tsx';
import { Row } from '@shared/ui/layout';
import { vars } from '@shared/styles/token.css.ts';

const NewPlaceSectionSkeleton = () => {
  return (
    <Row gap={vars.space.s20}>
      <PlaceCardSkeleton />
      <PlaceCardSkeleton />
      <PlaceCardSkeleton />
    </Row>
  );
};

export default NewPlaceSectionSkeleton;
