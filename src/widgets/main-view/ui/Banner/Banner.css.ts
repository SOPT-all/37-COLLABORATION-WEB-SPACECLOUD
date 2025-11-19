import { style } from '@vanilla-extract/css';
import { colorToken, radiusToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const wrapper = style({
  position: 'relative',
  width: '1128px',
  height: '200px',
});

export const container = style({
  width: '1128px',
  height: '200px',
  borderRadius: radiusToken.r12,
  boxShadow: '0px 1px 8px 0px #0000001A',
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
  backgroundColor: 'rgba(118, 118, 118, 0.5)',
  width: '45px',
  height: '16px',
  borderRadius: radiusToken.r50,
  zIndex: 999,
  paddingTop: '1px',
});

export const counterFont = style([
  typography.body_r_12_2,
  {
    color: colorToken.grayscale.white,
    textAlign: 'center',
    paddingTop: '1px',
  },
]);

export const leftArrow = style({
  position: 'absolute',
  top: '50%',
  left: '-15px',
  transform: 'translateY(-50%)',
  zIndex: 1000,
});

export const rightArrow = style({
  position: 'absolute',
  top: '50%',
  right: '-15px',
  transform: 'translateY(-50%)',
  zIndex: 1000,
});
