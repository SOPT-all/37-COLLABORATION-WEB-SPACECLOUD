import { style } from '@vanilla-extract/css';
import { colorToken, radiusToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const card = style([
  {
    display: 'flex',
    width: '55rem',
    height: '29.5rem',
    overflow: 'hidden',
    borderRadius: radiusToken.r16,
    background: colorToken.grayscale.white,
    boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.10)',
  },
]);

export const imageWrapper = style({
  overflow: 'hidden',
  width: '26.5rem',
  height: '100%',
});

export const image = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const textArea = style({
  padding: '2.4rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const tagAndTitle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const placeTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const placeTag = style({
  padding: '0.2rem 1rem',
  borderRadius: '20px',
  backgroundColor: colorToken.primary[200],
});

export const placeTagText = style([
  typography.body_r_12,
  {
    color: colorToken.grayscale.white,
  },
]);

export const title = style([
  typography.body_sb_16,
  {
    color: colorToken.grayscale.black,
  },
]);

export const ratingRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const stars = style({
  display: 'flex',
  gap: '0.2rem',
});

export const starIcon = style({
  width: '1.2rem',
  height: '1.2rem',
});

export const priceWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
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
    marginTop: '0.8rem',
    color: colorToken.grayscale.gray900,
  },
]);
