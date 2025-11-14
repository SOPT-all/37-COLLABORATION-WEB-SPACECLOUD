import { createThemeContract } from '@vanilla-extract/css';
import { colorToken, fontSizeToken, fontToken, fontWeightToken, layoutToken, radiusToken, spaceToken } from "./tokens";

// 임시 토큰 구조
// 디자인 시스템 공개 이후 수정
export const vars = createThemeContract({
  color: colorToken,
  space: spaceToken,
  radius: radiusToken,
  font: fontToken,
  fontSize: fontSizeToken,
  layout: layoutToken,
  fontWeight: fontWeightToken,
});
