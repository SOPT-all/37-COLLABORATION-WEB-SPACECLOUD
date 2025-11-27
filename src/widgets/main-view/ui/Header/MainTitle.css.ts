import { style } from '@vanilla-extract/css';
import { fontToken } from '@shared/styles/tokens';

export const container = style({
  marginBottom: '28px',
});

export const titleFont = style({
  fontFamily: fontToken.family.pretendard,
  fontSize: '32px',
  fontWeight: fontToken.weight.semibold,
  letterSpacing: '-0.006rem',
  lineHeight: '43.2px',
});
