import { type Amenity, AMENITY, type AmenityCategory } from '@widgets/filter/model/amenity.enum.ts';

export const AMENITY_GROUP: Record<AmenityCategory, Amenity[]> = {
  // 대분류 BASIC
  BASIC: [
    AMENITY.OUTLET,
    AMENITY.AIR_CONDITIONER,
    AMENITY.HEATING,
    AMENITY.WATER_SUPPLY,
    AMENITY.WATER_PURIFIER,
    AMENITY.DOOR_LOCK,
  ],

  // ELECTRONICS
  ELECTRONICS: [
    AMENITY.TV_PROJECTOR,
    AMENITY.INTERNET_WIFI,
    AMENITY.AUDIO_MIC,
    AMENITY.FULL_LENGTH_MIRROR,
    AMENITY.FIRST_AID_KIT,
    AMENITY.PRINTER_COPIER,
    AMENITY.WHITEBOARD,
    AMENITY.PC_NOTEBOOK,
    AMENITY.FAX,
  ],

  // FOOD
  FOOD: [AMENITY.FOOD_ALLOWED, AMENITY.ALCOHOL_ALLOWED],

  // INTERIOR
  INTERIOR: [
    AMENITY.CHAIR_TABLE,
    AMENITY.COMMON_KITCHEN,
    AMENITY.COOKING_FACILITY,
    AMENITY.LOUNGE_WAITING_AREA,
    AMENITY.INNER_RESTROOM,
    AMENITY.GENDER_SEPARATE_RESTROOM,
    AMENITY.TERRACE_ROOFTOP,
    AMENITY.BBQ_FACILITY,
    AMENITY.DRESSING_ROOM,
    AMENITY.SHOWER_FACILITY,
    AMENITY.PERSONAL_LOCKER,
  ],

  // SERVICES
  SERVICES: [
    AMENITY.CAFE_RESTAURANT,
    AMENITY.SIMPLE_SNACKS_DRINKS,
    AMENITY.CATERING,
    AMENITY.MERCHANDISE_SALES,
  ],

  // CONDITIONS
  CONDITIONS: [AMENITY.NO_SMOKING, AMENITY.PARKING, AMENITY.PETS_ALLOWED],

  // OPERATION
  OPERATION: [AMENITY.YEAR_ROUND, AMENITY.HOUR_24_OPERATION],
} as const;

// 카테고리 한글 라벨 매핑
export const AMENITY_CATEGORY_LABEL: Record<AmenityCategory, string> = {
  BASIC: '기본',
  ELECTRONICS: '전자기기/장비',
  FOOD: '음식물/주류 반입',
  INTERIOR: '내부시설',
  SERVICES: '제공/판매 서비스 ',
  CONDITIONS: '이용조건',
  OPERATION: '운영방식',
};

// 한글 라벨 매핑
export const AMENITY_LABEL: Record<Amenity, string> = {
  // BASIC
  [AMENITY.OUTLET]: '콘센트',
  [AMENITY.AIR_CONDITIONER]: '에어컨',
  [AMENITY.HEATING]: '난방기',
  [AMENITY.WATER_SUPPLY]: '급수시설',
  [AMENITY.WATER_PURIFIER]: '정수기',
  [AMENITY.DOOR_LOCK]: '도어락',

  // ELECTRONICS
  [AMENITY.TV_PROJECTOR]: 'TV/프로젝터',
  [AMENITY.INTERNET_WIFI]: '인터넷/WIFI',
  [AMENITY.AUDIO_MIC]: '음향/마이크',
  [AMENITY.FULL_LENGTH_MIRROR]: '전신거울',
  [AMENITY.FIRST_AID_KIT]: '구급약품',
  [AMENITY.PRINTER_COPIER]: '복사/인쇄기',
  [AMENITY.WHITEBOARD]: '화이트보드',
  [AMENITY.PC_NOTEBOOK]: 'PC/노트북',
  [AMENITY.FAX]: '팩스',

  // FOOD DRINK
  [AMENITY.FOOD_ALLOWED]: '음식물 반입 가능',
  [AMENITY.ALCOHOL_ALLOWED]: '주류 반입 가능',

  // INTERIOR
  [AMENITY.CHAIR_TABLE]: '의자/테이블',
  [AMENITY.COMMON_KITCHEN]: '공용 주방',
  [AMENITY.COOKING_FACILITY]: '취사 시설',
  [AMENITY.LOUNGE_WAITING_AREA]: '라운지/대기실',
  [AMENITY.INNER_RESTROOM]: '내부 화장실',
  [AMENITY.GENDER_SEPARATE_RESTROOM]: '남/여 화장실 구분',
  [AMENITY.TERRACE_ROOFTOP]: '테라스/루프탑',
  [AMENITY.BBQ_FACILITY]: '바베큐 시설',
  [AMENITY.DRESSING_ROOM]: '탈의실',
  [AMENITY.SHOWER_FACILITY]: '샤워 시설',
  [AMENITY.PERSONAL_LOCKER]: '개인 락커',

  // SERVICES
  [AMENITY.CAFE_RESTAURANT]: '카페/레스토랑',
  [AMENITY.SIMPLE_SNACKS_DRINKS]: '간단한 다과/음료',
  [AMENITY.CATERING]: '케이터링',
  [AMENITY.MERCHANDISE_SALES]: '장작 판매',

  // CONDITIONS
  [AMENITY.NO_SMOKING]: '금연',
  [AMENITY.PARKING]: '주차',
  [AMENITY.PETS_ALLOWED]: '반려동물 동반 가능',

  // OPERATION
  [AMENITY.YEAR_ROUND]: '연중무휴',
  [AMENITY.HOUR_24_OPERATION]: '24시간 운영',
};

// 최종적으로 편의 시설 UI 렌더에 활용
export const AMENITY_GROUP_WITH_LABEL = Object.entries(AMENITY_GROUP).reduce(
  (acc, [category, amenities]) => {
    acc[category as AmenityCategory] = amenities.map((amenity) => ({
      amenity,
      label: AMENITY_LABEL[amenity],
    }));
    return acc;
  },
  {} as Record<AmenityCategory, { amenity: Amenity; label: string }[]>,
);
