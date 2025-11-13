import { createThemeContract } from '@vanilla-extract/css';

// 임시 토큰 구조
// 디자인 시스템 공개 이후 수정
export const vars = createThemeContract({
  color: {
    background: null,
    foreground: null,
    primary: null,
    secondary: null,
    accent: null,
  },
  space: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
  },
  font: {
    body: null,
    mono: null,
  },
  fontSize: {
    sm: null,
    md: null,
    lg: null,
  },
  layout: {
    maxWidth: null,
  },
  fontWeight: {
    regular: null,
    medium: null,
    semibold: null,
    bigBold: null,
  },
});
