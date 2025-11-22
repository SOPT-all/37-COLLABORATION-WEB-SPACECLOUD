import type { ChildrenProps } from '@shared/types/common.ts';
import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { buttonBase } from './Button.css';
import { typography } from '@shared/styles/typography.css.ts';
import type { PartialVariants, TypographyVariants } from '@shared/types/variants.ts';

type ButtonProps = ChildrenProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  PartialVariants<typeof buttonBase> & {
    font?: TypographyVariants;
    style?: string;
  };

const Button = ({
  children,
  width,
  justify,
  style,
  font,
  gap,
  styleType,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        buttonBase({
          width: width,
          justify: justify,
          gap: gap,
          styleType: styleType,
        }),
        font && typography[font],
        style,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
