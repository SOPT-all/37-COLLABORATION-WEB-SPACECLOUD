import { createThemeContract } from '@vanilla-extract/css';
import { colorToken, fontSizeToken, fontToken, fontWeightToken, layoutToken, radiusToken, spaceToken } from "./tokens";
import { lineHeightToken } from "@shared/styles/tokens/lineHeightToken.css.ts";
import { letterSpacingToken } from "@shared/styles/tokens/letterSpacingToken.css.ts";

export const vars = createThemeContract({
  color: colorToken,
  space: spaceToken,
  radius: radiusToken,
  font: fontToken,
  fontSize: fontSizeToken,
  layout: layoutToken,
  fontWeight: fontWeightToken,
  lineHeight: lineHeightToken,
  letterSpacing: letterSpacingToken,
});
