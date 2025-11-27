import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';
import { typography } from '@shared/styles/typography.css.ts';

export const emptyWrapper = style({
  width: '100%',
  height: '50.6rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.s4,
});

export const heading = style([
  typography.body_m_18,
  {
    color: vars.color.grayscale.gray900,
  },
]);

export const description = style([
  typography.body_r_13,
  {
    color: vars.color.grayscale.gray700,
  },
]);
