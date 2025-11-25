/**
 * API 스펙에 정의된 필터 관련 queryString 키 상수입니다.
 * - URLSearchParams 파싱 및 생성 시 모든 필터 키의 단일 출처(Source of Truth) 역할을 합니다.
 * - purchaseType / priceUnit / priceRange(min/max) / facility에 대한
 *   query parameter 이름을 중앙에서 관리합니다.
 */
export const FILTER_QUERY_KEYS = {
  PURCHASE_TYPE: 'purchaseType',
  PRICE_UNIT: 'priceUnit',
  MIN_PRICE: 'minPrice',
  MAX_PRICE: 'maxPrice',
  FACILITY: 'facility',
} as const;
