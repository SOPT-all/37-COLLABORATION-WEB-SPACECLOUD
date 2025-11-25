import { MAX_PRICE, MIN_PRICE } from '@widgets/filter/config/price.config.ts';
import { type FilterState } from '@widgets/filter/model/filter.reducer.ts';
import type { PaymentType } from '@widgets/filter/model/paymentType.enum.ts';
import type { PriceUnitType } from '@widgets/filter/model/priceUnit.enum.ts';
import type { Amenity } from '@widgets/filter/model/amenity.enum.ts';
import { FILTER_QUERY_KEYS } from '@widgets/filter/model/filter.constants.ts';

/**
 * 설정한 필터를 Params로 변환하는 헬퍼 함수
 * 데이터 필터의 결제 유형, 금액 단위, 최소 금액, 최대 금액, 편의 시설에 해당하는 값을
 * URLSearchParams 값을 반환합니다.
 */
export const buildSearchParamsFromFilter = ({
  purchaseType,
  priceRange,
  priceUnit,
  facility,
}: FilterState) => {
  const [minPrice, maxPrice] = priceRange;
  const params = new URLSearchParams();

  if (purchaseType) params.set(FILTER_QUERY_KEYS.PURCHASE_TYPE, purchaseType);
  if (priceUnit) params.set(FILTER_QUERY_KEYS.PRICE_UNIT, priceUnit);
  if (minPrice !== MIN_PRICE) params.set(FILTER_QUERY_KEYS.MIN_PRICE, String(minPrice));
  if (maxPrice !== MAX_PRICE) params.set(FILTER_QUERY_KEYS.MAX_PRICE, String(maxPrice));

  if (facility.length > 0) params.set(FILTER_QUERY_KEYS.FACILITY, facility.join(','));

  return params;
};

/**
 * 설정된 필터 중 데이터 필터 쿼리를 파싱하는 헬퍼 함수
 * 데이터 필터의 결제 유형, 금액 단위, 최소 금액, 최대 금액, 편의 시설에 해당하는 값을
 * URL에서 파싱하여 FilterState로 반환합니다.
 */
export const parseFilterFromSearchParams = (params: URLSearchParams): Partial<FilterState> => {
  const purchaseTypeParam = params.get(FILTER_QUERY_KEYS.PURCHASE_TYPE);
  const priceUnitParam = params.get(FILTER_QUERY_KEYS.PRICE_UNIT);
  const minPriceParam = params.get(FILTER_QUERY_KEYS.MIN_PRICE);
  const maxPriceParam = params.get(FILTER_QUERY_KEYS.MAX_PRICE);
  const facilityParam = params.get(FILTER_QUERY_KEYS.FACILITY);

  const purchaseType = purchaseTypeParam as PaymentType | null;
  const priceUnit = priceUnitParam as PriceUnitType | null;

  const minPrice = minPriceParam ? Number(minPriceParam) : MIN_PRICE;
  const maxPrice = maxPriceParam ? Number(maxPriceParam) : MAX_PRICE;

  const facility = facilityParam ? (facilityParam.split(',').filter(Boolean) as Amenity[]) : [];

  return { purchaseType, priceUnit, priceRange: [minPrice, maxPrice], facility };
};
