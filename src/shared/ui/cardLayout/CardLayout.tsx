import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as s from './CardLayout.css';

type Orientation = 'vertical' | 'horizontal';

interface CardLayoutProps extends ComponentPropsWithoutRef<'article'> {
  orientation: Orientation;
  image: ReactNode;
  bodyClassName?: string;
  imageWrapperClassName?: string;
  children: ReactNode;
}

const CardLayout = ({
  orientation,
  image,
  children,
  className,
  bodyClassName,
  imageWrapperClassName,
  ...rest
}: CardLayoutProps) => {
  return (
    <article className={clsx(s.card({ orientation }), className)} {...rest}>
      <div className={clsx(s.imageWrapper({ orientation }), imageWrapperClassName)}>{image}</div>
      <div className={clsx(s.body, bodyClassName)}>{children}</div>
    </article>
  );
};

export default CardLayout;
