import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colorToken, spaceToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const textArea = style({
  display: 'flex',
  flexDirection: 'column',
  padding: `${spaceToken.s16} ${spaceToken.s20}`,
});

export const titleRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const name = style([
  typography.body_sb_16,
  {
    display: 'flex',
    alignItems: 'center',
    color: colorToken.grayscale.black,
  },
]);

export const location = style([
  typography.body_r_12_2,
  {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spaceToken.s4,
    whiteSpace: 'nowrap',
    color: colorToken.grayscale.gray900,
  },
]);

export const tagsRow = style({
  margin: `${spaceToken.s8} 0 0 0`,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  gap: spaceToken.s4,
});

export const tag = style([
  typography.body_r_12_2,
  {
    color: colorToken.grayscale.gray900,
  },
]);

export const bottomRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: spaceToken.s12,
});

export const meta = style([
  typography.body_r_12_2,
  {
    display: 'flex',
    alignItems: 'center',
    color: colorToken.grayscale.gray900,
  },
]);

export const metaItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    gap: {
      default: { gap: spaceToken.s3 },
      tight: { gap: spaceToken.s2 },
    },
  },
});

export const metaSpacing = recipe({
  base: {
    marginLeft: 0,
  },
  variants: {
    size: {
      comment: { marginLeft: spaceToken.s8 },
      like: { marginLeft: spaceToken.s7 },
    },
  },
});

export const price = style([
  typography.head_sb_20,
  {
    display: 'flex',
    alignItems: 'center',
    gap: spaceToken.s4,
    color: colorToken.primary[300],
  },
]);

export const priceUnit = style([
  typography.body_r_12_2,
  {
    color: colorToken.grayscale.gray900,
  },
]);

export const icon = recipe({
  base: {
    display: 'block',
  },
  variants: {
    size: {
      lg: { width: '1.4rem', height: '1.4rem' },
      md: { width: '1.2rem', height: '1.2rem' },
      sm: { width: '1rem', height: '1rem' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
