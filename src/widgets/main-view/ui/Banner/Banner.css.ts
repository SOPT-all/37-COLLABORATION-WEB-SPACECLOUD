import { style } from '@vanilla-extract/css';
import { radiusToken, zIndexToken } from '@shared/styles/tokens';
import { typography } from '@shared/styles/typography.css';
import { vars } from '@shared/styles/token.css';

export const wrapper = style({
  position: 'relative',
  width: '1129px',
  height: '200px',
});

export const container = style({
  width: '1128px',
  height: '200px',
  borderRadius: radiusToken.r12,
  boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  position: 'relative',
});

export const bannerImage = style({
  width: '100%',
  height: '100%',
  display: 'block',
  objectFit: 'cover',
});

export const counter = style({
  position: 'absolute',
  bottom: '36px',
  right: '122px',
  backgroundColor: vars.color.grayscale.gray70050,
  width: '45px',
  height: '16px',
  borderRadius: radiusToken.r50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const counterFont = style([
  typography.body_r_12_2,
  {
    color: vars.color.grayscale.white,
    textAlign: 'center',
  },
]);

export const leftArrow = style({
  position: 'absolute',
  top: '50%',
  left: 0,
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
});

export const rightArrow = style({
  position: 'absolute',
  top: '50%',
  right: 0,
  transform: 'translate(50%, -50%)',
  zIndex: zIndexToken.z100,
});
