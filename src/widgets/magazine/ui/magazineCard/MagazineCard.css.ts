import { style } from '@vanilla-extract/css';
import { radiusToken } from '@shared/styles/tokens';

export const container = style({
  position: 'relative',
  width: '55rem',
  height: '29.5rem',
  overflow: 'hidden',
  borderRadius: radiusToken.r12,
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});
