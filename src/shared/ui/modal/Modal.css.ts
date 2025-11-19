import { style } from '@vanilla-extract/css';
import { radiusToken, colorToken } from '@/shared/styles/tokens';

export const overlay = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: colorToken.opacity.dim,
});

export const content = style({
  backgroundColor: '#ffffff',
  width: 'fit-content',
  height: 'fit-content',
  maxWidth: '60dvw',
  maxHeight: '60dvh',
  overflow: 'auto',
  borderRadius: radiusToken.r4,
  flexShrink: 0,
});
