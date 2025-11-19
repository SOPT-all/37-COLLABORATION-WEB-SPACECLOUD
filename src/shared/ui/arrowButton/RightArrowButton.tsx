import { ArrowRightIcon } from '@/shared/assets/icons';
import type { ButtonHTMLAttributes } from 'react';
import * as s from './RightArrowButton.css';
import clsx from 'clsx';

interface RightArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const RightArrowButton = ({
  isActive = true,
  onClick,
  className,
  ...rest
}: RightArrowButtonProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
  };
  return (
    <button
      className={clsx(s.buttonContainer, className)}
      type='button'
      onClick={handleClick}
      disabled={!isActive || rest.disabled}
      aria-label='오른쪽으로 이동'
      {...rest}
    >
      <ArrowRightIcon />
    </button>
  );
};

export default RightArrowButton;
