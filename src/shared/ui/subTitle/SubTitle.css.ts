import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colorToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const subTitle = recipe({
  base: {
    display: 'flex',
    alignContent: 'center',
    color: colorToken.grayscale.black,
  },
  variants: {
    variant: {
      small24: [
        typography.head_sb_20,
        {
          height: '2rem',
          marginBottom: '2.4rem',
        },
      ],
      small25: [
        typography.head_sb_20,
        {
          height: '2.8rem',
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

export const titleRow = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'flex-end',
  },
  variants: {
    iconGap: {
      wide: { gap: '0.8rem' },
      tight: { gap: '0.4rem' },
    },
  },
  defaultVariants: {
    iconGap: 'wide',
  },
});

export const adBadge = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'flex-end',
    gap: '0.4rem',
    color: colorToken.grayscale.gray900,
  },
});

export const adIcon = style({
  display: 'block',
  alignSelf: 'center',
  width: '1.4rem',
  height: '1.4rem',
});

export const adLabel = style([
  typography.body_r_13,
  {
    color: colorToken.grayscale.gray900,
  },
]);
