import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { chip } from './Chip.css';

type ChipTone = 'default' | 'accent';
type ChipSize = 'sm' | 'md';

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: ChipTone;
  size?: ChipSize;
}

const Chip = ({ tone = 'default', size = 'sm', className, ...rest }: ChipProps) => {
  return <span className={clsx(chip({ tone, size }), className)} {...rest} />;
};

export default Chip;
