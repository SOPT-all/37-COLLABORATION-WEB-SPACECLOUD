import { style } from '@vanilla-extract/css';
import { radiusToken } from '@/shared/styles/tokens';

export const container = style([
  radiusToken.r12,
  {
    position: 'relative',
    width: '55rem',
    height: '29.5rem',
    overflow: 'hidden',
  },
]);

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});
