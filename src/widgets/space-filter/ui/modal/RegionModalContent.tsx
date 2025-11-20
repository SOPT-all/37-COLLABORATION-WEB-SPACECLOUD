import { useState } from 'react';
import clsx from 'clsx';
import Button from '@/shared/ui/Button';
import { ArrowRightIcon } from '@/shared/assets/icons';
import { AREA_FILTERS } from '@/shared/configs/region';
import type { ModalProps } from '@/shared/types/common';
import * as s from './RegionModalContent.css';
import { vars } from '@/shared/styles/token.css';

const regions = [
  { key: 'Seoul', label: '서울', isActive: true },
  { key: 'Gyeonggi', label: '경기', isActive: false },
  { key: 'Incheon', label: '인천', isActive: false },
  { key: 'Busan', label: '부산', isActive: false },
  { key: 'Gwangju', label: '광주', isActive: false },
  { key: 'Daegu', label: '대구', isActive: false },
  { key: 'Daejeon', label: '대전', isActive: false },
  { key: 'Ulsan', label: '울산', isActive: false },
  { key: 'Jeju', label: '제주', isActive: false },
  { key: 'Gangwon', label: '강원', isActive: false },
  { key: 'Gyeongnam', label: '경남', isActive: false },
  { key: 'Gyeongbuk', label: '경북', isActive: false },
  { key: 'Jeonla', label: '전남/전북', isActive: false },
  { key: 'ChungBuk', label: '충북', isActive: false },
  { key: 'ChungnamAndSejong', label: '충남/세종', isActive: false },
];

const RegionModalContent = ({ onClose }: ModalProps) => {
  const [showArea, setShowArea] = useState(false);

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
          {regions.map((region) => (
            <Button
              key={region.key}
              styleType='location'
              width='min'
              gap='g4'
              font='body_m_12'
              onClick={region.isActive ? () => setShowArea(true) : undefined}
            >
              <span className={s.regionLabel}>{region.label}</span>
            </Button>
          ))}{' '}
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
              onClick={onClose}
            >
              <span className={s.areaLabel}>{area.label}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegionModalContent;
