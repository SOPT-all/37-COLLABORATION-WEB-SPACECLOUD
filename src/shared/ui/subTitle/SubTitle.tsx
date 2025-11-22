import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { InfoIcon, NewBadge } from '@shared/assets/icons';
import {
  adBadge,
  adIcon,
  adLabel,
  newBadgeIcon,
  newBadgeRow,
  newBadgeTitle,
  subTitle,
  titleRow,
} from './SubTitle.css';

export type SubTitleVariant = NonNullable<Parameters<typeof subTitle>[0]>['variant'];
type IconGap = NonNullable<Parameters<typeof titleRow>[0]>['iconGap'];

interface SubTitleProps extends ComponentPropsWithoutRef<'h2'> {
  variant?: SubTitleVariant;
}

interface SubTitleWithAdBadgeProps {
  children: ReactNode;
  iconGap?: IconGap;
}

const SubTitleRoot = ({ children, variant = 'small24', ...rest }: SubTitleProps) => (
  <h2 className={subTitle({ variant })} {...rest}>
    {children}
  </h2>
);

const SubTitleWithNewBadge = ({ children }: { children: ReactNode }) => (
  <span className={newBadgeRow}>
    <span className={newBadgeTitle}>{children}</span>
    <NewBadge className={newBadgeIcon} />
  </span>
);

const SubTitleWithAdBadge = ({ children, iconGap = 'wide' }: SubTitleWithAdBadgeProps) => (
  <span className={titleRow({ iconGap })}>
    <span>{children}</span>
    <span className={adBadge}>
      <InfoIcon className={adIcon} />
      <span className={adLabel}>광고</span>
    </span>
  </span>
);

const SubTitle = Object.assign(SubTitleRoot, {
  NewBadge: SubTitleWithNewBadge,
  AdBadge: SubTitleWithAdBadge,
}) as typeof SubTitleRoot & {
  NewBadge: typeof SubTitleWithNewBadge;
  AdBadge: typeof SubTitleWithAdBadge;
};

export default SubTitle;
