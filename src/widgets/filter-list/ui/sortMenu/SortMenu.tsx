import * as s from './SortMenu.css';
import { useState, useRef, useCallback, useEffect } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@/shared/assets/icons';

const OPTIONS = [
  { key: 'best', label: '베스트 공간 순' },
  { key: 'price_low', label: '가격 낮은 순' },
  { key: 'price_high', label: '가격 높은 순' },
  { key: 'review', label: '이용후기 많은 순' },
];

const SortMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('베스트 공간 순');
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  const hideOptions = useCallback((e: MouseEvent) => {
    if (modalRef.current === null) {
      return;
    }
    if (!modalRef.current.contains(e.target as HTMLElement)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', hideOptions, true);
    return () => {
      document.removeEventListener('click', hideOptions, true);
    };
  }, [hideOptions]);

  return (
    <div className={s.container} ref={modalRef}>
      <button className={s.sortMenuWrapper} onClick={() => setIsOpen(!isOpen)}>
        <span className={s.sortMenu}>{selected}</span>
        {isOpen ? <ArrowUpIcon width={16} height={16} /> : <ArrowDownIcon width={16} height={16} />}
      </button>

      {isOpen && (
        <ul className={s.optionsContainer}>
          {OPTIONS.map((option) => (
            <li
              key={option.key}
              className={s.optionList}
              onClick={() => handleSelect(option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortMenu;
