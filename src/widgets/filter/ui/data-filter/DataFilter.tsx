import * as S from '@widgets/filter/ui/data-filter/DataFilter.css.ts';
import type { ModalProps } from '@shared/types/common.ts';
import AmenityFilter from '@widgets/filter/ui/data-filter/amenity/AmenityFilter.tsx';
import { AMENITY_GROUP_WITH_LABEL } from '@widgets/filter/config/amenity.config.ts';
import PriceUnitFilter from '@widgets/filter/ui/data-filter/price-unit/PriceUnitFilter.tsx';
import { PRICE_UNIT_LABEL } from '@widgets/filter/config/priceUnit.config.ts';
import PriceFilter from '@widgets/filter/ui/data-filter/price/PriceFilter.tsx';
import { typedEntries } from '@shared/libs/object.ts';
import PaymentTypeFilter from '@widgets/filter/ui/data-filter/priceType/PaymentTypeFilter.tsx';
import { PAYMENT_TYPE_META } from '@widgets/filter/config/paymentType.config.ts';
import { MAX_PRICE, MIN_PRICE, PRICE_STEP } from '@widgets/filter/config/price.config.ts';
import FilterFooter from '@widgets/filter/ui/data-filter/footer/FilterFooter.tsx';
import {
  buildSearchParamsFromFilter,
  parseFilterFromSearchParams,
} from '@widgets/filter/model/filter.helper.ts';
import { useDataFilter } from '@widgets/filter/model/useDataFilter.ts';
import { FILTER_QUERY_KEYS } from '@widgets/filter/model/filter.constants.ts';

type DataFilterProps = ModalProps & {
  currentParams: URLSearchParams;
  handleSearchParams: (params: URLSearchParams, filterTypeObject: Record<string, string>) => void;
};

const DataFilter = ({ onClose, handleSearchParams, currentParams }: DataFilterProps) => {
  const initialFilter = parseFilterFromSearchParams(currentParams);
  const {
    handlePriceRangeChange,
    handlePriceUnit,
    reset,
    handlePaymentType,
    handleFacility,
    state: { purchaseType, priceRange, priceUnit, facility },
  } = useDataFilter(initialFilter);

  const handleApply = () => {
    const params = buildSearchParamsFromFilter({ purchaseType, priceRange, priceUnit, facility });
    handleSearchParams(params, FILTER_QUERY_KEYS);
    onClose?.();
  };

  return (
    <form className={S.wrapper.form}>
      {/* 결제유형 필터 섹션 */}
      <PaymentTypeFilter>
        {typedEntries(PAYMENT_TYPE_META).map(([key, value]) => (
          <PaymentTypeFilter.Button
            key={key}
            paymentType={key}
            label={value.label}
            isActive={purchaseType === key}
            description={value.description}
            onClick={() => handlePaymentType(key)}
          />
        ))}
      </PaymentTypeFilter>

      {/* 가격단위 필터 섹션 */}
      <PriceUnitFilter heading='가격 단위'>
        {typedEntries(PRICE_UNIT_LABEL).map(([key, label]) => (
          <PriceUnitFilter.Button
            key={key}
            label={label}
            onClick={() => handlePriceUnit(key)}
            isActive={priceUnit === key}
          />
        ))}
      </PriceUnitFilter>

      {/* 가격 필터 섹션 */}
      <PriceFilter>
        {/* 슬라이더 */}
        <PriceFilter.Slider
          maxLimit={MAX_PRICE}
          minLimit={MIN_PRICE}
          step={PRICE_STEP}
          value={priceRange}
          onChange={handlePriceRangeChange}
        />
        <PriceFilter.Buttons
          currentMinValue={priceRange[0]}
          currentMaxValue={priceRange[1]}
          handleChange={handlePriceRangeChange}
        />
      </PriceFilter>

      {/* 편의시설 필터 섹션 */}
      <AmenityFilter>
        {typedEntries(AMENITY_GROUP_WITH_LABEL).map(([heading, value]) => (
          <AmenityFilter.Row
            key={heading}
            heading={heading}
            value={value}
            facility={facility}
            onClick={handleFacility}
          />
        ))}
      </AmenityFilter>

      {/* 리셋, 적용 버튼 섹션 */}
      <FilterFooter onReset={reset} onApply={handleApply} />
    </form>
  );
};

export default DataFilter;
