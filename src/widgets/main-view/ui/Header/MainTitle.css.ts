import { style } from '@vanilla-extract/css';
import { fontToken } from '@/shared/styles/tokens';

export const container = style({
  marginBottom: '28px',
});

export const titleFont = style({
  fontFamily: fontToken.family.pretendard,
  fontSize: '32px',
  fontWeight: fontToken.weight.semibold,
  letterSpacing: fontToken.letterSpacing.tight_03,
  lineHeight: '44px',
});
