import { style } from '@vanilla-extract/css';
import { colorToken, radiusToken, spaceToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const card = style([
  {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '36.2rem',
    height: '27.6rem',
    borderRadius: radiusToken.r16,
    background: colorToken.grayscale.white,
    boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.10)',
  },
]);

export const imageWrapper = style({
  overflow: 'hidden',
  width: '100%',
  height: '16.2rem',
});

export const image = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

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

export const metaItem = style({
  display: 'flex',
  alignItems: 'center',
});

export const metaComment = style({
  marginLeft: spaceToken.s8,
});

export const metaLike = style({
  marginLeft: spaceToken.s7,
});

export const metaText = style({
  marginLeft: spaceToken.s3,
});

export const metaTextTight = style({
  marginLeft: spaceToken.s2,
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
