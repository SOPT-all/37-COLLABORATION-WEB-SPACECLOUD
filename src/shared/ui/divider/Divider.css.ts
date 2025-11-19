import { style } from '@vanilla-extract/css';
import { colorToken } from '@/shared/styles/tokens';

export const dividerGray300 = style({
  width: '100%',
  height: '1px',
  backgroundColor: colorToken.grayscale.gray300,
});

export const dividerGray400 = style({
  width: '100%',
  height: '1px',
  backgroundColor: colorToken.grayscale.gray400,
});
