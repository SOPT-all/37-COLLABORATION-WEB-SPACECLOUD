import { keyframes, style } from '@vanilla-extract/css';
import { colorToken, radiusToken, spaceToken } from '@/shared/styles/tokens';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

const skeletonBase = style({
  backgroundImage: `linear-gradient(90deg, ${colorToken.grayscale.gray100} 25%, ${colorToken.grayscale.gray200} 37%, ${colorToken.grayscale.gray100} 63%)`,
  backgroundSize: '400% 100%',
  animation: `${shimmer} 1.2s ease-in-out infinite`,
});

export const imageWrapper = style({
  position: 'relative',
});

export const image = style([
  skeletonBase,
  {
    width: '100%',
    height: '100%',
  },
]);

export const couponBadge = style([
  skeletonBase,
  {
    position: 'absolute',
    top: '1.7rem',
    left: '1.9rem',
    height: spaceToken.s28,
    width: '7.2rem',
    borderRadius: radiusToken.r16,
  },
]);

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  padding: `${spaceToken.s16} ${spaceToken.s20}`,
});

export const titleRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: spaceToken.s12,
});

export const title = style([
  skeletonBase,
  {
    height: spaceToken.s16,
    width: '14rem',
    borderRadius: radiusToken.r12,
  },
]);

export const location = style([
  skeletonBase,
  {
    height: spaceToken.s12,
    width: '9.4rem',
    borderRadius: radiusToken.r12,
  },
]);

export const tagsRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spaceToken.s4,
  marginTop: spaceToken.s8,
});

export const tag = style([
  skeletonBase,
  {
    height: spaceToken.s24,
    width: '5.6rem',
    borderRadius: radiusToken.r30,
  },
]);

export const tagWide = style([
  skeletonBase,
  {
    height: spaceToken.s24,
    width: '7.2rem',
    borderRadius: radiusToken.r30,
  },
]);

export const bottomRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: spaceToken.s12,
});

export const meta = style({
  display: 'flex',
  alignItems: 'center',
  gap: spaceToken.s8,
});

export const metaItem = style([
  skeletonBase,
  {
    height: spaceToken.s12,
    width: '6.4rem',
    borderRadius: radiusToken.r12,
  },
]);

export const price = style([
  skeletonBase,
  {
    height: spaceToken.s20,
    width: '8.4rem',
    borderRadius: radiusToken.r12,
  },
]);
