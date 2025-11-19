import * as s from './SortMenu.css';
import { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@/shared/assets/icons';

const OPTIONS = ['베스트 공간 순', '가격 낮은 순', '가격 높은 순', '이용후기 많은 순'];

const SortMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('베스트 공간 순');

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={s.container}>
      <div className={s.buttonContainer}>
        <button className={s.sortMenu} onClick={() => setIsOpen(!isOpen)}>
          {selected}
        </button>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ArrowUpIcon className={s.icon} /> : <ArrowDownIcon className={s.icon} />}
        </button>
      </div>

      {isOpen && (
        <ul className={s.optionsContainer}>
          {OPTIONS.map((option) => (
            <li key={option} className={s.optionList} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortMenu;
