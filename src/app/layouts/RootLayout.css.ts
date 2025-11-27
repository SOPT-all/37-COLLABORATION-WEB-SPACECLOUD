import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const rootLayout = style({
  width: '100%',
  maxWidth: '1129px',
  margin: '0 auto',
  paddingBottom: vars.space.s20,
  paddingTop: vars.space.s80,
});
