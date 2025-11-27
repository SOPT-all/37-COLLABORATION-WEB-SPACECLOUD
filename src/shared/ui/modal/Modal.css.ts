import { style } from '@vanilla-extract/css';
import { zIndexToken } from '@shared/styles/tokens';
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
    backgroundColor: vars.color.grayscale.white,
    width: 'fit-content',
    height: 'fit-content',
    maxWidth: '90dvw',
    maxHeight: '65dvh',
    overflow: 'auto',
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
        border: `1px solid ${vars.color.grayscale.gray300}`,
      },
    },
    borderRadius: {
      r4: {
        borderRadius: vars.radius.r4,
      },
      r20: {
        borderRadius: vars.radius.r20,
      },
    },
  },
  defaultVariants: {
    border: 'none',
    borderRadius: 'r4',
  },
});

export const dim = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: vars.color.opacity.dim,
  zIndex: 999,
});
