import SubTitle from '@shared/ui/subTitle/SubTitle';
import PlaceCard, { type PlaceCardProps } from './placeCard/PlaceCard';
import * as s from './PlaceSection.css';

type SubTitleVariants = 'small24' | 'small25' | 'large';

interface PlaceSectionProps {
  title: string;
  subtitleVariant?: SubTitleVariants;
  places?: PlaceCardProps[];
}

const mockPlaces: PlaceCardProps[] = [
  {
    id: 1,
    name: '이랑 한식주점배경촬영장',
    capacity: 30,
    commentCount: 0,
    likeCount: 0,
    price: 33000,
    priceUnit: 'HOUR',
    thumbnailImageUrl: 'https://placehold.co/362x162',
    hashtags: ['한식주점', '촬영대관', '자연채광'],
    address: '문정동',
    coupon: false,
  },
  {
    id: 2,
    name: '[신촌]조용한소모임. 북카페',
    capacity: 20,
    commentCount: 0,
    likeCount: 1,
    price: 2500,
    priceUnit: 'HOUR',
    thumbnailImageUrl: 'https://placehold.co/362x162',
    hashtags: ['공영주차장', '소모임', '독서모임', '#북카페'],
    address: '노고산동',
    coupon: false,
  },
  {
    id: 3,
    name: '마고',
    capacity: 30,
    commentCount: 0,
    likeCount: 0,
    price: 33000,
    priceUnit: 'HOUR',
    thumbnailImageUrl: 'https://placehold.co/362x162',
    hashtags: ['운동', '촬영', '필라테스', '요가'],
    address: '홍은동',
    coupon: true,
  },
];

const PlaceSection = ({
  title,
  subtitleVariant = 'small24',
  places = mockPlaces,
}: PlaceSectionProps) => {
  return (
    <section className={s.section}>
      <SubTitle variant={subtitleVariant}>{title}</SubTitle>
      <div className={s.list}>
        {places.map((place) => (
          <PlaceCard key={place.id} {...place} />
        ))}
      </div>
    </section>
  );
};

export default PlaceSection;
