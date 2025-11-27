import { keyframes, style } from '@vanilla-extract/css';
import { colorToken, radiusToken, spaceToken } from '@/shared/styles/tokens';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-100% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

const skeletonBase = style({
  backgroundImage: `linear-gradient(90deg, ${colorToken.grayscale.gray100} 25%, ${colorToken.grayscale.gray200} 37%, ${colorToken.grayscale.gray100} 63%)`,
  backgroundSize: '200% 100%',
  animation: `${shimmer} 1.4s ease-in-out infinite`,
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 55rem)',
  columnGap: spaceToken.s26,
  rowGap: spaceToken.s20,
  justifyContent: 'center',
});

export const moreButtonWrapper = style({
  marginTop: spaceToken.s32,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const moreButtonSkeleton = style([
  skeletonBase,
  {
    width: '32.4rem',
    height: '4rem',
    borderRadius: radiusToken.r12,
  },
]);

export const sentinel = style({
  width: '100%',
  height: spaceToken.s32,
});
