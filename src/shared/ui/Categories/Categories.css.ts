import { style } from '@vanilla-extract/css';
import { colorToken, radiusToken, spaceToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const list = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spaceToken.s8,
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const item = style({
  padding: `${spaceToken.s2} ${spaceToken.s10}`,
  borderRadius: radiusToken.r20,
  backgroundColor: colorToken.primary[200],
});

export const text = style([
  typography.body_r_12,
  {
    color: colorToken.grayscale.white,
  },
]);
