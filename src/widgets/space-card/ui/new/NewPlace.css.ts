import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const sectionWrapper = style({
  position: 'relative',
  display: 'flex',
  gap: vars.space.s20,
});

export const leftArrow = style({
  position: 'absolute',
  top: '50%',
  left: 0,
  transform: 'translate(-50%, -50%)',
  zIndex: zIndexToken.z100,
});

export const rightArrow = style({
  position: 'absolute',
  top: '50%',
  right: 0,
  transform: 'translate(50%, -50%)',
  zIndex: zIndexToken.z100,
});
