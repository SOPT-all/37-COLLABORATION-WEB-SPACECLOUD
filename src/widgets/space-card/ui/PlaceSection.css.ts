import { style } from '@vanilla-extract/css';
import { spaceToken } from '@/shared/styles/tokens';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
});

export const list = style({
  display: 'flex',
  gap: spaceToken.s32,
  flexWrap: 'nowrap',
  overflowX: 'auto',
});
