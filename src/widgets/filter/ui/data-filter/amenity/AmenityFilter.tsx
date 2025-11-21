import * as S from '@widgets/filter/ui/data-filter/DataFilter.css.ts';
import { AMENITY_CATEGORY_LABEL } from '@widgets/filter/config/amenity.config.ts';
import * as AS from '@widgets/filter/ui/data-filter/amenity/AmenityFilter.css.ts';
import { typography } from '@shared/styles/typography.css.ts';
import clsx from 'clsx';
import type { ChildrenProps } from '@shared/types/common.ts';
import type { Amenity, AmenityCategory } from '@widgets/filter/model/amenity.enum.ts';
type AmenityFilterProps = ChildrenProps;

export const AmenityFilterRoot = ({ children }: AmenityFilterProps) => {
  return (
    <section className={S.section({ gap: 'loose' })}>
      <h3 className={S.label.heading}>편의 시설</h3>
      {children}
    </section>
  );
};

type AmenityFilterRowProps = {
  heading: AmenityCategory;
  value: {
    amenity: Amenity;
    label: string;
  }[];
};

const AmenityFilterRow = ({ heading, value }: AmenityFilterRowProps) => {
  return (
    <div key={heading}>
      <h4 className={S.label.subHeading}>{AMENITY_CATEGORY_LABEL[heading]}</h4>
      <ul style={{ display: 'flex', gap: '10px', padding: 0, flexWrap: 'wrap' }}>
        {value.map((item) => (
          <li key={item.amenity} style={{ width: 'fit-content', listStyle: 'none' }}>
            <span className={clsx(AS.amenityItemBase({ active: false }), typography.body_m_14)}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AmenityFilter = Object.assign(AmenityFilterRoot, { Row: AmenityFilterRow });

export default AmenityFilter;
