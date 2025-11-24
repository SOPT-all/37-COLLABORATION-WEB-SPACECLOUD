import { useState } from 'react';
import clsx from 'clsx';
import Button from '@/shared/ui/Button';
import { ArrowRightIcon } from '@/shared/assets/icons';
import { AREA_FILTERS, REGIONS } from '@/shared/configs/region';
import * as s from './RegionModalContent.css';
import { vars } from '@/shared/styles/token.css';
import type { ModalContentProps } from '@/shared/types/common';

const RegionModalContent = ({ onClose, onChange, value }: ModalContentProps) => {
  const [showArea, setShowArea] = useState(!!value);

  const handleClick = (key: string | null, content: string) => {
    onChange?.({ key, content });
    onClose?.();
  };

  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <span className={clsx({ [s.active]: showArea })}>{!showArea ? '시/도 선택' : '서울'}</span>
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
          {AREA_FILTERS.map((area) => (
            <Button
              key={area.key}
              styleType='area'
              width='min'
              gap='g4'
              font='body_m_14'
              onClick={() => handleClick(area.key, area.content)}
            >
              <span className={s.areaLabel}>{area.content}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegionModalContent;
