import type { Amenity } from '@widgets/filter/model/amenity.enum.ts';
import type { PriceUnitType } from '@widgets/filter/model/priceUnit.enum.ts';
import type { PaymentType } from '@widgets/filter/model/paymentType.enum.ts';
import {
  dataFilterReducer,
  type FilterState,
  initialFilterState,
} from '@widgets/filter/model/filter.reducer.ts';
import { useReducer } from 'react';

/**
 * DataFilter 상태 관리를 위한 커스텀 훅입니다.
 * - useReducer 기반의 로컬 상태를 관리합니다.
 * - 초기값 override 가능합니다. (URLSearchParams 기반 초기화에 사용)
 * - 결제 유형 / 가격 단위 / 가격 범위 / 편의시설 필터에 대한 dispatch 핸들러를 제공합니다.
 *
 * @Returns {state, handlePaymentType, handlePriceUnit, handlePriceRangeChange, handleFacility, reset}
 */
export const useDataFilter = (initialOverride?: Partial<FilterState>) => {
  const [state, dispatch] = useReducer(dataFilterReducer, {
    ...initialFilterState,
    ...initialOverride,
  } as FilterState);

  const handlePaymentType = (paymentType: PaymentType) => {
    dispatch({ type: 'PURCHASE_TYPE', payload: paymentType });
  };

  const handlePriceUnit = (priceUnit: PriceUnitType) => {
    dispatch({ type: 'PRICE_UNIT', payload: priceUnit });
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    dispatch({ type: 'PRICE_RANGE', payload: range });
  };

  const handleFacility = (amenity: Amenity) => {
    dispatch({ type: 'FACILITY', payload: amenity });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    state,
    handlePaymentType,
    handlePriceUnit,
    handlePriceRangeChange,
    handleFacility,
    reset,
  };
};
