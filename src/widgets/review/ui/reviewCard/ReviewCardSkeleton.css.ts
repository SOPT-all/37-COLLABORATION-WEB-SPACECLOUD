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

export const image = style([
  skeletonBase,
  {
    width: '100%',
    height: '100%',
  },
]);

export const body = style({
  padding: `${spaceToken.s24} ${spaceToken.s20}`,
  display: 'flex',
  flexDirection: 'column',
  gap: spaceToken.s12,
});

export const chipRow = style({
  display: 'flex',
  gap: spaceToken.s8,
});

export const chip = style([
  skeletonBase,
  {
    height: spaceToken.s24,
    width: '5.6rem',
    borderRadius: radiusToken.r16,
  },
]);

export const line = style([
  skeletonBase,
  {
    height: spaceToken.s12,
    borderRadius: radiusToken.r12,
  },
]);

export const lineShort = style([
  skeletonBase,
  {
    height: spaceToken.s12,
    width: '70%',
    borderRadius: radiusToken.r12,
  },
]);
