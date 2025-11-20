import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { subTitle } from './SubTitle.css';

type SubTitleVariant = NonNullable<Parameters<typeof subTitle>[0]>['variant'];

interface SubTitleProps extends ComponentPropsWithoutRef<'h2'> {
  children: ReactNode;
  variant?: SubTitleVariant;
}

const SubTitle = ({ children, variant }: SubTitleProps) => {
  return <h2 className={subTitle({ variant })}>{children}</h2>;
};

export default SubTitle;
