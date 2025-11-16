import { createThemeContract } from '@vanilla-extract/css';
import {
  colorToken,
  fontToken,
  layoutToken,
  radiusToken,
  spaceToken,
} from "./tokens";

export const vars = createThemeContract({
  color: colorToken,
  space: spaceToken,
  radius: radiusToken,
  font: fontToken,
  layout: layoutToken,
});
