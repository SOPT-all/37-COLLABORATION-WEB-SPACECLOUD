import type { PaymentType } from '@widgets/filter/model/paymentType.enum.ts';
import type { PriceUnitType } from '@widgets/filter/model/priceUnit.enum.ts';
import type { Amenity } from '@widgets/filter/model/amenity.enum.ts';
import { MAX_PRICE, MIN_PRICE } from '@widgets/filter/config/price.config.ts';
import { FILTER_QUERY_KEYS } from '@widgets/filter/model/filter.constants.ts';

export type FilterState = {
  [FILTER_QUERY_KEYS.PURCHASE_TYPE]: PaymentType | null;
  [FILTER_QUERY_KEYS.PRICE_UNIT]: PriceUnitType | null;
  priceRange: [number, number];
  [FILTER_QUERY_KEYS.FACILITY]: Amenity[];
};

export type FilterAction =
  | {
      type: 'PURCHASE_TYPE';
      payload: PaymentType;
    }
  | { type: 'PRICE_UNIT'; payload: PriceUnitType }
  | { type: 'PRICE_RANGE'; payload: [number, number] }
  | { type: 'FACILITY'; payload: Amenity }
  | { type: 'RESET' }
  | { type: 'APPLY' };

export const initialFilterState: FilterState = {
  purchaseType: null,
  priceUnit: null,
  priceRange: [MIN_PRICE, MAX_PRICE],
  facility: [],
};

/**
 * DataFilter Reducer
 *
 * - 필터 상태(FilterState)에 대한 순수 상태 전환 로직을 담당합니다.
 * - 각 액션(type)은 특정 필터 항목을 업데이트하거나 초기화하는 역할을 합니다.
 * - UI 로직(useDataFilter)과 URL 변환 로직(filter.helper)은 모두 분리되어 있으며,
 *   reducer는 필터의 비즈니스 로직만 책임집니다.
 *
 * Action 기능 요약:
 * - PURCHASE_TYPE : 결제 유형 선택/토글
 * - PRICE_UNIT    : 가격 단위 선택/토글
 * - PRICE_RANGE   : 가격 슬라이더 최소/최대값 갱신
 * - FACILITY      : 편의시설 추가/제거 토글
 * - RESET         : 필터 전체 초기화
 */
export const dataFilterReducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'PURCHASE_TYPE': {
      const isSame = state.purchaseType === action.payload;
      return {
        ...state,
        purchaseType: isSame ? null : action.payload,
      };
    }

    case 'PRICE_UNIT': {
      const isSame = state.priceUnit === action.payload;
      return {
        ...state,
        priceUnit: isSame ? null : action.payload,
        priceRange: [MIN_PRICE, MAX_PRICE],
      };
    }

    case 'PRICE_RANGE': {
      return {
        ...state,
        priceRange: action.payload,
      };
    }

    case 'FACILITY': {
      const exists = state.facility.includes(action.payload);

      return {
        ...state,
        facility: exists
          ? state.facility.filter((item) => item !== action.payload)
          : [...state.facility, action.payload],
      };
    }

    case 'RESET': {
      return initialFilterState;
    }

    default:
      return state;
  }
};
