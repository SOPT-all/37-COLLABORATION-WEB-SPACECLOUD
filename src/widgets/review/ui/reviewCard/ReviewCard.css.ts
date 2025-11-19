import { style } from '@vanilla-extract/css';
import { colorToken, spaceToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const textArea = style({
  padding: `${spaceToken.s24} ${spaceToken.s20}`,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const tagAndTitle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spaceToken.s8,
});

export const title = style([
  typography.body_sb_16,
  {
    color: colorToken.grayscale.black,
  },
]);

export const ratingRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: spaceToken.s12,
});

export const stars = style({
  display: 'flex',
  gap: spaceToken.s2,
});

export const starIcon = style({
  width: '1.2rem',
  height: '1.2rem',
});

export const priceWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: spaceToken.s4,
});

export const price = style([
  typography.body_sb_16,
  {
    color: colorToken.primary[300],
  },
]);

export const unit = style([
  typography.body_r_12_2,
  {
    color: colorToken.grayscale.gray900,
  },
]);

export const description = style([
  typography.body_r_12,
  {
    marginTop: spaceToken.s8,
    color: colorToken.grayscale.gray900,
  },
]);
