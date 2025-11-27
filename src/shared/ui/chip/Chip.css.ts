import { style } from '@vanilla-extract/css';
import { colorToken, radiusToken, spaceToken } from '@shared/styles/tokens';
import { typography } from '@shared/styles/typography.css';

export const chip = style([
  typography.body_r_12,
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${spaceToken.s2} ${spaceToken.s10}`,
    borderRadius: radiusToken.r20,
    whiteSpace: 'nowrap',
    backgroundColor: colorToken.primary[200],
    color: colorToken.grayscale.white,
  },
]);
