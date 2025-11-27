import imgPremiumZone1 from '@/shared/assets/images/img-premium-zone-1.webp';
import imgPremiumZone2 from '@/shared/assets/images/img-premium-zone-2.webp';
import imgPremiumZone3 from '@/shared/assets/images/img-premium-zone-3.webp';
import type { PlaceCardProps } from '@/widgets/space-card/ui/placeCard/PlaceCard';

export type PremiumZoneItem = PlaceCardProps;

export const premiumZoneMocks: PremiumZoneItem[] = [
  {
    id: 1,
    name: '송파 와인모임 와인파티룸 모아무아',
    address: '문정동',
    capacity: 12,
    commentCount: 0,
    likeCount: 16,
    price: 25000,
    priceUnit: 'HOUR',
    hashtags: ['잘토리델조세핀', '프리미엄 글라스', '와인'],
    coupon: true,
    thumbnailImageUrl: imgPremiumZone1,
  },
  {
    id: 2,
    name: '강남역3초완벽 파티룸 [더밀실]',
    address: '서초동',
    capacity: 16,
    commentCount: 19,
    likeCount: 275,
    price: 70000,
    priceUnit: 'PACKAGE',
    hashtags: ['보드게임', '노래방', '강남파티룸', '강남역'],
    coupon: true,
    thumbnailImageUrl: imgPremiumZone2,
  },
  {
    id: 3,
    name: '[계절파티룸] 포레스트 루프탑 바베큐',
    address: '신림동',
    capacity: 25,
    commentCount: 26,
    likeCount: 554,
    price: 100000,
    priceUnit: 'PACKAGE',
    hashtags: ['루프탑', '영화관', '노래방', '파티룸'],
    coupon: false,
    thumbnailImageUrl: imgPremiumZone3,
  },
];
