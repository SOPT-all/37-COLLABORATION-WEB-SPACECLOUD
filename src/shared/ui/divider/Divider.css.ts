import { recipe } from '@vanilla-extract/recipes';
import { colorToken } from '@shared/styles/tokens';

export const divider = recipe({
  base: { width: '100%' },

  variants: {
    tone: {
      gray300: { backgroundColor: colorToken.grayscale.gray300 },
      gray400: { backgroundColor: colorToken.grayscale.gray400 },
    },

    thick: {
      thin: { height: '1px' },
      medium: { height: '2px' },
      thick: { height: '4px' },
    },

    defaultVariants: {
      tone: 'gray300',
      thick: 'thin',
    },
  },
});
