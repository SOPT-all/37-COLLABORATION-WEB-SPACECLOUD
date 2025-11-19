import { recipe } from '@vanilla-extract/recipes';
import { colorToken, radiusToken, spaceToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const chip = recipe({
  base: [
    typography.body_r_12,
    {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: radiusToken.r20,
      whiteSpace: 'nowrap',
    },
  ],
  variants: {
    tone: {
      default: {
        backgroundColor: colorToken.primary[200],
        color: colorToken.grayscale.white,
      },
      accent: {
        backgroundColor: colorToken.secondary.yellow200,
        color: colorToken.grayscale.black,
      },
    },
    size: {
      sm: {
        padding: `${spaceToken.s2} ${spaceToken.s10}`,
      },
      md: [
        typography.body_sb_14,
        {
          padding: `${spaceToken.s4} ${spaceToken.s12}`,
        },
      ],
    },
  },
  defaultVariants: {
    tone: 'default',
    size: 'sm',
  },
});
