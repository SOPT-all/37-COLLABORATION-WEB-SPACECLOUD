import { useState } from 'react';
import Button from '@/shared/ui/Button';
import * as s from './MainFilter.css';
import { useModal } from '@/shared/libs/useModal';
import SpaceModalContent from './modal/SpaceModalContent';
import RegionModalContent from './modal/RegionModalContent';
import CapacityModalContent from './modal/CapacityModalContent';
import CalendarModalContent from './modal/CalendarModalContent';
import { CloseIcon } from '@/shared/assets/icons';
import type { ChildrenProps, SpaceFilterValue } from '@/shared/types/common';

const FILTER_INFO = [
  { key: 'space', label: '공간', Component: SpaceModalContent },
  { key: 'area', label: '지역', Component: RegionModalContent },
  { key: 'capacity', label: '인원', Component: CapacityModalContent },
  { key: 'date', label: '날짜', Component: CalendarModalContent },
];

export type FilterKey = (typeof FILTER_INFO)[number]['key'];
export type FilterValue = string | SpaceFilterValue | null;
export type FilterState = Record<FilterKey, FilterValue>;

interface MainFilterProps extends ChildrenProps {
  filter: FilterState;
  onFilterChange: (key: FilterKey, value: FilterValue) => void;
}

const MainFilter = ({ children, filter, onFilterChange }: MainFilterProps) => {
  const { openModal } = useModal();

  // 모달 open 여부
  const [active, setActive] = useState<FilterKey | null>(null);

  // x 버튼
  const handleReset = (e: React.MouseEvent, key: FilterKey) => {
    e.stopPropagation();
    onFilterChange(key, null);
  };

  const getStyleType = (hasValue: boolean, isOpen: boolean) => {
    if (!hasValue && !isOpen) return 'mainFilter'; // 값 X, 닫힘
    if (!hasValue && isOpen) return 'mainFilterActive'; // 값 X, 열림
    if (hasValue && !isOpen) return 'mainFilterSelected'; // 값 0, 닫힘
    return 'mainFilterSelectedActive'; // 값 0, 열림
  };

  // 필터 버튼 내부 텍스트 변환
  const formatValue = (value: FilterValue) => {
    if (!value) return '';
    if (typeof value === 'object') {
      return value.content;
    }
    return value;
  };

  return (
    <section className={s.wrapper}>
      <div className={s.filterWrapper}>
        {FILTER_INFO.map(({ key, label, Component }) => {
          const hasValue = filter[key] !== null;
          const isOpen = active === key;
          console.log(`${key}'s hasValue`, hasValue, `${key}'s hasValue`, isOpen);

          return (
            <Button
              key={key}
              styleType={getStyleType(hasValue, isOpen)}
              font='body_m_18'
              width='filter'
              isOpen={isOpen}
              onClick={(e) => {
                // 모달 중복 열기 방지
                if (active === key) return;

                setActive(key);
                openModal(
                  <Component
                    value={filter[key]}
                    onChange={(value) => onFilterChange(key, value)}
                  />,
                  e.currentTarget,
                  'gray300',
                  () => setActive(null),
                );
              }}
            >
              {hasValue ? (
                <div className={s.selected}>
                  <span className={s.selectedValue}>{formatValue(filter[key])}</span>
                  <CloseIcon onClick={(e) => handleReset(e, key)} />
                </div>
              ) : (
                label
              )}
            </Button>
          );
        })}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default MainFilter;
