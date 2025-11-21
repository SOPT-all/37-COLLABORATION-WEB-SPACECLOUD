import { style } from '@vanilla-extract/css';
import { spaceToken } from '@/shared/styles/tokens';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 55rem)',
  columnGap: spaceToken.s26,
  rowGap: spaceToken.s20,
  justifyContent: 'center',
});

export const moreButtonWrapper = style({
  marginTop: spaceToken.s52,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});
