import { style } from '@vanilla-extract/css';
import { spaceToken } from '@shared/styles/tokens';

export const placeList = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '2rem 1.6rem',
});

export const sentinel = style({
  width: '100%',
  height: spaceToken.s32,
});
