import { style } from '@vanilla-extract/css';
import { colorToken, radiusToken, zIndexToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

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
  objectFit: 'cover',
});

export const counter = style({
  position: 'absolute',
  bottom: '36px',
  right: '122px',
  backgroundColor: colorToken.grayscale.gray70050,
  width: '45px',
  height: '16px',
  borderRadius: radiusToken.r50,
  zIndex: zIndexToken.z900,
  paddingTop: '2px',
});

export const counterFont = style([
  typography.body_r_12_2,
  {
    color: colorToken.grayscale.white,
    textAlign: 'center',
  },
]);

export const leftArrow = style({
  position: 'absolute',
  top: '50%',
  left: 0,
  transform: 'translate(-50%, -50%)',
  zIndex: zIndexToken.z1000,
});

export const rightArrow = style({
  position: 'absolute',
  top: '50%',
  right: 0,
  transform: 'translate(50%, -50%)',
  zIndex: zIndexToken.z1000,
});
