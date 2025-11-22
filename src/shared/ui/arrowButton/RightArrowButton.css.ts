import { style } from '@vanilla-extract/css';
import { colorToken, radiusToken } from '@/shared/styles/tokens';

export const buttonContainer = style({
  width: '33.8px',
  height: '33.8px',
  borderRadius: radiusToken.circle,
  boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: colorToken.grayscale.white,
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
      pointerEvents: 'none',
      boxShadow: 'none',
    },
  },
});
