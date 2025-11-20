import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colorToken, spaceToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const subTitle = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    color: colorToken.grayscale.black,
    whiteSpace: 'nowrap',
  },
  variants: {
    variant: {
      small24: [
        typography.head_sb_20,
        {
          height: spaceToken.s20,
          marginBottom: spaceToken.s24,
        },
      ],
      small25: [
        typography.head_sb_20,
        {
          height: spaceToken.s28,
          marginBottom: spaceToken.s25,
        },
      ],
      large: [
        typography.head_b_24,
        {
          marginBottom: spaceToken.s24,
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
      wide: { gap: spaceToken.s8 },
      tight: { gap: spaceToken.s4 },
    },
  },
  defaultVariants: {
    iconGap: 'wide',
  },
});

export const newBadgeRow = style({
  display: 'inline-flex',
  alignItems: 'flex-end',
  gap: spaceToken.s2,
});

export const newBadgeTitle = style({
  display: 'inline-block',
  width: '27.7rem',
  textAlign: 'left',
});

export const newBadgeIcon = style({
  display: 'block',
  alignSelf: 'flex-start',
  width: '3.8rem',
  height: '2.3rem',
});

export const adBadge = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'flex-end',
    gap: spaceToken.s4,
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
