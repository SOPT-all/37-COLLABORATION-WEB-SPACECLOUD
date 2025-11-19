import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { chip } from './Chip.css';

type ChipProps = HTMLAttributes<HTMLSpanElement>;

const Chip = ({ className, ...rest }: ChipProps) => {
  return <span className={clsx(chip, className)} {...rest} />;
};

export default Chip;
