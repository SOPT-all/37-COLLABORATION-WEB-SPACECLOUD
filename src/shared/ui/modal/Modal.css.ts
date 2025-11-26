import { style } from '@vanilla-extract/css';
import { colorToken, radiusToken, zIndexToken } from '@shared/styles/tokens';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/token.css';

export const dialog = style({
  border: 'none',
  padding: 0,
  background: 'transparent',
  zIndex: zIndexToken.z1000,
});

export const content = recipe({
  base: {
    backgroundColor: colorToken.grayscale.white,
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
    borderRadius: {
      r20: {
        borderRadius: vars.radius.r20,
      },
    },
  },
});

export const dim = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: colorToken.opacity.dim,
  zIndex: 999,
});
