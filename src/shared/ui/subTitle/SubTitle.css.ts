import { recipe } from '@vanilla-extract/recipes';
import { colorToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const subTitle = recipe({
  base: {
    color: colorToken.grayscale.black,
  },
  variants: {
    variant: {
      small24: [
        typography.head_sb_20,
        {
          marginBottom: '2.4rem',
        },
      ],
      small25: [
        typography.head_sb_20,
        {
          marginBottom: '2.5rem',
        },
      ],
      large: [
        typography.head_b_24,
        {
          marginBottom: '2.4rem',
        },
      ],
    },
  },
  defaultVariants: {
    variant: 'small24',
  },
});
