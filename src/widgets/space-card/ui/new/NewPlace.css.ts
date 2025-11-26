import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';
import { zIndexToken } from '@shared/styles/tokens';

export const sectionWrapper = style({
  display: 'flex',
  gap: vars.space.s20,
});

export const leftArrow = style({
  position: 'absolute',
  top: '50%',
  left: 0,
  transform: 'translate(-50%, -50%)',
  zIndex: zIndexToken.z1000,
});

export const rightArrow = style({
  position: 'absolute',
  top: '50%',
  right: 0,
  transform: 'translate(50%, -50%)',
  zIndex: zIndexToken.z1000,
});
