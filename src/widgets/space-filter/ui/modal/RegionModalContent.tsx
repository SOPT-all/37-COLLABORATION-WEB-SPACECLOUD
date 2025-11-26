import { useState } from 'react';
import clsx from 'clsx';
import Button from '@/shared/ui/Button';
import { ArrowRightIcon } from '@/shared/assets/icons';
import { AREA_FILTERS, REGIONS } from '@/shared/configs/region';
import { vars } from '@/shared/styles/token.css';
import type { ModalContentProps } from '@/shared/types/common';
import { typedEntries } from '@/shared/libs/object';
import * as s from './RegionModalContent.css';

const REGION_LABEL = '시/도 선택';
const AREA_LABEL = '서울';

const RegionModalContent = ({ onClose, onChange, value }: ModalContentProps) => {
  const [showArea, setShowArea] = useState(!!value);

  const handleClick = (key: string | null, content: string) => {
    onChange?.({ key, content });
    onClose?.();
  };

  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <span className={clsx({ [s.active]: showArea })}>
          {!showArea ? REGION_LABEL : AREA_LABEL}
        </span>
        <ArrowRightIcon
          width={7}
          height={12}
          stroke={showArea ? vars.color.grayscale.gray900 : vars.color.grayscale.gray700}
          strokeWidth={1.3}
        />
        <span>동네 선택</span>
      </header>

      {!showArea && (
        <div className={s.regionGrid}>
          {REGIONS.map((region) => (
            <Button
              key={region.key}
              styleType='location'
              width='min'
              gap='g4'
              font='body_m_12'
              onClick={region.isActive ? () => setShowArea((prev) => !prev) : undefined}
            >
              <span className={s.regionLabel}>{region.label}</span>
            </Button>
          ))}
        </div>
      )}

      {showArea && (
        <div className={s.areaGrid}>
          {typedEntries(AREA_FILTERS).map(([key, label]) => (
            <Button
              key={key}
              styleType='area'
              width='min'
              gap='g4'
              font='body_m_14'
              onClick={key === 'SEOUL_ALL' ? undefined : () => handleClick(key, label)}
              disabled={key === null}
            >
              <span className={s.areaLabel}>{label}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegionModalContent;
