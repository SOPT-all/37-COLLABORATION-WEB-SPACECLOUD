import { style, styleVariants } from '@vanilla-extract/css';
import { spaceToken } from '@/shared/styles/tokens';

const shadowPadding = spaceToken.s10;

export const section = style({
  display: 'flex',
  flexDirection: 'column',
});

export const carousel = style({
  position: 'relative',
  margin: '0 auto',
});

export const carouselGap = styleVariants(
  {
    small24: spaceToken.s20,
    large: spaceToken.s16,
  },
  (gap) => ({
    width: `calc(36.2rem * 3 + ${gap} * 2)`,
  }),
);

export const list = style({
  display: 'flex',
  flexWrap: 'nowrap',
  overflowX: 'auto',
  overflowY: 'visible',
  boxSizing: 'border-box',
  padding: shadowPadding,
  margin: `-${shadowPadding}`,
  width: `calc(100% + ${shadowPadding} * 2)`,
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': { display: 'none' },
  },
});

export const listGap = styleVariants(
  {
    small24: spaceToken.s20,
    large: spaceToken.s16,
  },
  (gap) => ({
    gap,
  }),
);

export const arrowBase = style({
  position: 'absolute',
  top: '50%',
  zIndex: 1,
});

export const arrowLeft = style([
  arrowBase,
  {
    left: 0,
    transform: 'translate(-50%, -50%)',
  },
]);

export const arrowRight = style([
  arrowBase,
  {
    right: 0,
    transform: 'translate(50%, -50%)',
  },
]);
