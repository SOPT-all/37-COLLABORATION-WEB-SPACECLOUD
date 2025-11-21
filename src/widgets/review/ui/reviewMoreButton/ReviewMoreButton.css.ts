import { style } from '@vanilla-extract/css';
import { colorToken, radiusToken, spaceToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const button = style([
  typography.body_sb_12,
  {
    width: '32.4rem',
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaceToken.s11,
    borderRadius: radiusToken.r12,
    color: colorToken.grayscale.black,
    backgroundColor: colorToken.grayscale.white,
    boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.10)',
    cursor: 'pointer',
  },
]);

export const icon = style({
  width: '1.1rem',
  height: '1.1rem',
});
