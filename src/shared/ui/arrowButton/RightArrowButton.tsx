import { ArrowRightIcon } from '@/shared/assets/icons';
import type { ButtonHTMLAttributes } from 'react';
import * as s from './RightArrowButton.css';
import clsx from 'clsx';
import { vars } from '@/shared/styles/token.css';

interface RightArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const RightArrowButton = ({
  isActive = true,
  onClick,
  className,
  disabled,
  ...rest
}: RightArrowButtonProps) => {
  return (
    <button
      className={clsx(s.buttonContainer, className)}
      type='button'
      onClick={onClick}
      disabled={disabled ?? !isActive}
      aria-label='오른쪽으로 이동'
      {...rest}
    >
      <ArrowRightIcon stroke={vars.color.grayscale.black} />
    </button>
  );
};

export default RightArrowButton;
