import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '26px',
  padding: '40px 0 20px 0',
  borderBottom: `1px solid ${vars.color.grayscale.gray300}`,
});
