import { createGlobalTheme } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';
import { colorToken, fontToken, layoutToken, radiusToken, spaceToken } from '@shared/styles/tokens';

createGlobalTheme(':root', vars, {
  color: colorToken,
  space: spaceToken,
  radius: radiusToken,
  font: fontToken,
  layout: layoutToken,
});
