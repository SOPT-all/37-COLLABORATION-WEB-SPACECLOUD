import { ArrowLeftIcon } from '@/shared/assets/icons';
import type { ButtonHTMLAttributes } from 'react';
import * as s from './LeftArrowButton.css';
import clsx from 'clsx';

interface LeftArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const LeftArrowButton = ({
  isActive = true,
  onClick,
  className,
  disabled,
  ...rest
}: LeftArrowButtonProps) => {
  return (
    <button
      className={clsx(s.buttonContainer, className)}
      onClick={onClick}
      type='button'
      aria-label='왼쪽으로 이동'
      disabled={disabled ?? !isActive}
      {...rest}
    >
      <ArrowLeftIcon />
    </button>
  );
};

export default LeftArrowButton;
