import { style } from '@vanilla-extract/css';
import { colorToken, radiusToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const card = style([
  radiusToken.r16,
  {
    width: '36.2rem',
    height: '27.6rem',
    background: colorToken.grayscale.white,
    boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.10)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
]);

export const imageWrapper = style({
  width: '100%',
  height: '16.2rem',
  overflow: 'hidden',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});

export const textArea = style({
  padding: '1.6rem 2rem',
  display: 'flex',
  flexDirection: 'column',
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
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    color: colorToken.grayscale.gray900,
  },
]);

export const tagsRow = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.4rem',
  marginTop: '0.8rem',
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
  marginTop: '1.2rem',
});

export const meta = style([
  typography.body_r_12_2,
  {
    display: 'flex',
    alignItems: 'center',
    color: colorToken.grayscale.gray900,
  },
]);

export const metaItem = style({
  display: 'flex',
  alignItems: 'center',
});

export const metaComment = style({
  marginLeft: '0.8rem',
});

export const metaLike = style({
  marginLeft: '0.7rem',
});

export const metaText = style({
  marginLeft: '0.3rem',
});

export const metaTextTight = style({
  marginLeft: '0.2rem',
});

export const price = style([
  typography.head_sb_20,
  {
    color: colorToken.primary[300],
    gap: '0.4rem',
    display: 'flex',
    alignItems: 'center',
  },
]);

export const priceUnit = style([
  typography.body_r_12_2,
  {
    color: colorToken.grayscale.gray900,
  },
]);

const iconBase = {
  display: 'block',
};

export const locationIcon = style({
  ...iconBase,
  width: '1.4rem',
  height: '1.4rem',
});

export const capacityIcon = style({
  ...iconBase,
  width: '1.2rem',
  height: '1.2rem',
});

export const commentIcon = style({
  ...iconBase,
  width: '1rem',
  height: '1rem',
});

export const likeIcon = style({
  ...iconBase,
  width: '1.2rem',
  height: '1.2rem',
});
