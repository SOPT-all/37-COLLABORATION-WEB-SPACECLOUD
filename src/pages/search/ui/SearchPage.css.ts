import { style, styleVariants } from '@vanilla-extract/css';
import { spaceToken } from '@/shared/styles/tokens';

export const dividerSpacing = styleVariants({
  top: {
    margin: `${spaceToken.s24} 0`,
  },
  bottom: {
    margin: `${spaceToken.s28} 0`,
  },
});

export const premiumPlusSpacing = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spaceToken.s48,
});
