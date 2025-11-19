import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import * as s from './Categories.css';

type CategoriesProps = Omit<HTMLAttributes<HTMLUListElement>, 'id'> & {
  categories: string[];
  id: number;
};

const Categories = ({ categories, id, className, ...rest }: CategoriesProps) => {
  return (
    <ul className={clsx(s.list, className)} {...rest}>
      {categories.map((category) => (
        <li key={`${id}-${category}`} className={s.item}>
          <span className={s.text}>{category}</span>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
