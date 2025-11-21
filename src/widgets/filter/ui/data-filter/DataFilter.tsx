import * as S from '@widgets/filter/ui/data-filter/DataFilter.css.ts';
import type { ModalProps } from '@shared/types/common.ts';
import { useState } from 'react';
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

type DataFilterProps = ModalProps;

const DataFilter = ({ onClose }: DataFilterProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]);

  return (
    <form className={S.wrapper.form}>
      {/* 결제유형 필터 섹션 */}
      <PaymentTypeFilter>
        {typedEntries(PAYMENT_TYPE_META).map(([key, value]) => (
          <PaymentTypeFilter.Button
            key={key}
            paymentType={key}
            label={value.label}
            description={value.description}
          />
        ))}
      </PaymentTypeFilter>

      {/* 가격단위 필터 섹션 */}
      <PriceUnitFilter heading='가격 단위'>
        {typedEntries(PRICE_UNIT_LABEL).map(([key, label]) => (
          <PriceUnitFilter.Button key={key} label={label} />
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
          onChange={setPriceRange}
        />
        <PriceFilter.Buttons currentMinValue={priceRange[0]} currentMaxValue={priceRange[1]} />
      </PriceFilter>

      {/* 편의시설 필터 섹션 */}
      <AmenityFilter>
        {typedEntries(AMENITY_GROUP_WITH_LABEL).map(([heading, value]) => (
          <AmenityFilter.Row key={heading} heading={heading} value={value} />
        ))}
      </AmenityFilter>

      {/* 리셋, 적용 버튼 섹션 */}
      <FilterFooter onClose={onClose} />
    </form>
  );
};

export default DataFilter;
