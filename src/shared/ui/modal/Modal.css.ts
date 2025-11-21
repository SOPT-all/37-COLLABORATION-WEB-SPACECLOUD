// Modal.css.ts
import { style } from '@vanilla-extract/css';
import { colorToken, radiusToken } from '@shared/styles/tokens';
import { recipe } from '@vanilla-extract/recipes';

export const dialog = style({
  border: 'none',
  padding: 0,
  background: 'transparent',
  '::backdrop': {
    backgroundColor: colorToken.opacity.dim,
  },
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
