import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colorToken, radiusToken } from '@shared/styles/tokens';

export const card = recipe({
  base: {
    display: 'flex',
    flex: '0 0 auto',
    overflow: 'hidden',
    borderRadius: radiusToken.r16,
    background: colorToken.grayscale.white,
    boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.1)',
  },
  variants: {
    orientation: {
      vertical: {
        flexDirection: 'column',
        width: '36.2rem',
        minHeight: '27.6rem',
      },
      horizontal: {
        flexDirection: 'row',
        width: '55rem',
        height: '29.5rem',
      },
    },
  },
});

export const imageWrapper = recipe({
  base: {
    overflow: 'hidden',
  },
  variants: {
    orientation: {
      vertical: {
        width: '100%',
        height: '16.2rem',
      },
      horizontal: {
        width: '26.5rem',
        height: '100%',
      },
    },
  },
});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const cardImage = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
