import { createTheme } from '@vanilla-extract/css';
import { vars } from '../../shared/styles/token.css.ts';
import {
  colorToken,
  fontSizeToken,
  fontToken,
  fontWeightToken,
  layoutToken,
  radiusToken,
  spaceToken,
} from "@shared/styles/tokens";
import { letterSpacingToken } from "@shared/styles/tokens/letterSpacingToken.css.ts";
import { lineHeightToken } from "@shared/styles/tokens/lineHeightToken.css.ts";

// 임시 테마
// 디자인 시스템 공개 후 수정
export const theme = createTheme(vars, {
  letterSpacing: letterSpacingToken,
  lineHeight: lineHeightToken,
  color: colorToken,
  space: spaceToken,
  radius: radiusToken,
  font: fontToken,
  fontSize: fontSizeToken,
  layout: layoutToken,
  fontWeight: fontWeightToken,
});
