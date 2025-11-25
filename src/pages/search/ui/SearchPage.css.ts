import { style } from '@vanilla-extract/css';
import { spaceToken } from '@/shared/styles/tokens';

export const dividerSpacing = style({
  margin: `${spaceToken.s28} 0`,
});

export const premiumPlusSpacing = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spaceToken.s48,
});
