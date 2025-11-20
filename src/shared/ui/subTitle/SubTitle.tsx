import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { InfoIcon } from '@shared/assets/icons';
import { adBadge, adIcon, adLabel, subTitle, titleRow } from './SubTitle.css';

type SubTitleVariant = NonNullable<Parameters<typeof subTitle>[0]>['variant'];
type IconGap = NonNullable<Parameters<typeof titleRow>[0]>['iconGap'];

interface SubTitleProps extends ComponentPropsWithoutRef<'h2'> {
  children: ReactNode;
  variant?: SubTitleVariant;
  iconGap?: IconGap;
}

const SubTitle = ({ children, variant, iconGap = 'wide', ...rest }: SubTitleProps) => {
  const isLarge = variant === 'large';

  return (
    <h2 className={subTitle({ variant })} {...rest}>
      {isLarge ? (
        <span className={titleRow({ iconGap })}>
          <span>{children}</span>
          <span className={adBadge()}>
            <InfoIcon className={adIcon} />
            <span className={adLabel}>광고</span>
          </span>
        </span>
      ) : (
        children
      )}
    </h2>
  );
};

export default SubTitle;
