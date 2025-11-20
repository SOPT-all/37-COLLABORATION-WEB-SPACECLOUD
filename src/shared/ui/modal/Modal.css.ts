import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
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

export const content = recipe({
  base: {
    backgroundColor: '#ffffff',
    width: 'fit-content',
    height: 'fit-content',
    maxWidth: '69dvw',
    maxHeight: '65dvh',
    overflow: 'auto',
    borderRadius: radiusToken.r4,
    flexShrink: 0,
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  variants: {
    border: {
      none: {
        border: 'none',
      },
      gray300: {
        border: `1px solid ${colorToken.grayscale.gray300}`,
      },
    },
  },
});
