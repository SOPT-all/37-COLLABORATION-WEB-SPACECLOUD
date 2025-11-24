import imgPlusZone1 from '@/shared/assets/images/img-plus-zone-1.png';
import imgPlusZone2 from '@/shared/assets/images/img-plus-zone-2.png';
import imgPlusZone3 from '@/shared/assets/images/img-plus-zone-3.png';
import type { PlaceCardProps } from '@/widgets/space-card/ui/placeCard/PlaceCard';

export type PlusZoneItem = PlaceCardProps;

export const plusZoneMocks: PlusZoneItem[] = [
  {
    id: 1,
    name: '[강남] 아일랜드이너프 강남점',
    address: '역삼동',
    capacity: 99,
    capacityLabel: '+99',
    commentCount: 0,
    likeCount: 283,
    price: 150000,
    priceUnit: 'PACKAGE',
    hashtags: ['서울파티룸', '강남파티룸', '단체파티룸'],
    coupon: false,
    thumbnailImageUrl: imgPlusZone1,
  },
  {
    id: 2,
    name: '[종로,을지로 파티룸] 녹색광선',
    address: '관철동',
    capacity: 30,
    commentCount: 9,
    likeCount: 75,
    price: 10000,
    priceUnit: 'HOUR',
    hashtags: ['종로파티룸', '을지로파티룸', '모임공간'],
    coupon: true,
    thumbnailImageUrl: imgPlusZone2,
  },
  {
    id: 3,
    name: '(세미나,워크샵) 종각역 인사라운지',
    address: '건지동',
    capacity: 50,
    commentCount: 6,
    likeCount: 609,
    price: 88000,
    priceUnit: 'HOUR',
    hashtags: ['세미나', '워크숍', '강의', '파티룸'],
    coupon: false,
    thumbnailImageUrl: imgPlusZone3,
  },
];
