import { createThemeContract } from '@vanilla-extract/css';
import {
  colorToken,
  fontSizeToken,
  fontToken,
  fontWeightToken,
  layoutToken,
  letterSpacingToken,
  lineHeightToken,
  radiusToken,
  spaceToken,
} from "./tokens";

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
