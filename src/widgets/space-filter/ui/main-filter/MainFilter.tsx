import { useState } from 'react';
import Button from '@shared/ui/Button';
import * as s from './MainFilter.css';
import { useModal } from '@shared/libs/useModal';
import { CloseIcon } from '@shared/assets/icons';
import { FILTER_INFO } from '@widgets/space-filter/config/filterConfig';
import { formatDisplayText } from '@widgets/space-filter/lib/filterFormatters';
import type { ChildrenProps } from '@shared/types/common';
import type { FilterKey, FilterState, FilterValue } from '@widgets/space-filter/types/types';

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

  // 모달 열기 핸들러
  const handleOpenModal = (key: FilterKey, e: React.MouseEvent<HTMLElement>) => {
    // 모달 중복 열기 방지
    if (active === key) return;

    setActive(key);
    const Component = FILTER_INFO.find((info) => info.key === key)?.Component;
    if (!Component) return;

    openModal(
      <Component value={filter[key]} onChange={(value) => onFilterChange(key, value)} />,
      e.currentTarget as HTMLElement,
      'gray300',
      () => setActive(null),
    );
  };

  return (
    <section className={s.wrapper}>
      <div className={s.filterWrapper}>
        {FILTER_INFO.map(({ key, label }) => {
          const hasValue = filter[key] !== null;
          const isOpen = active === key;

          return (
            <Button
              key={key}
              styleType={getStyleType(hasValue, isOpen)}
              font='body_m_18'
              width='filter'
              isOpen={isOpen}
              onClick={(e) => handleOpenModal(key, e)}
            >
              {hasValue && (
                <div className={s.selected}>
                  <span className={s.selectedValue}>{formatDisplayText(key, filter[key])}</span>
                  <CloseIcon onClick={(e) => handleReset(e, key)} />
                </div>
              )}
              {!hasValue && label}
            </Button>
          );
        })}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default MainFilter;
