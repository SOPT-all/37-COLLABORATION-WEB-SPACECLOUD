import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const rootLayout = style({
  width: '100%',
  maxWidth: '1129px',
  margin: '0 auto',
  padding: `0 ${vars.space.s20} ${vars.space.s20} ${vars.space.s20}`,
});
