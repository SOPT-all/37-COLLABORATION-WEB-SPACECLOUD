import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 26,
  paddingTop: vars.space.s40,
});
