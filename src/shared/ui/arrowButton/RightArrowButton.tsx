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
  ...rest
}: RightArrowButtonProps) => {
  return (
    <button
      className={clsx(s.buttonContainer, className)}
      type='button'
      onClick={onClick}
      disabled={!isActive || rest.disabled}
      aria-label='오른쪽으로 이동'
      {...rest}
    >
      <ArrowRightIcon
        width={10}
        height={19}
        stroke={vars.color.grayscale.gray900}
        strokeWidth={3.2}
      />
    </button>
  );
};

export default RightArrowButton;
