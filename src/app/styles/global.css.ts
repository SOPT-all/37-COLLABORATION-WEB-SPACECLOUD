import { globalStyle } from '@vanilla-extract/css';
import { vars } from '../../shared/styles/token.css.ts';

globalStyle('html, body, #root', {
  height: '100%',
});

globalStyle('body', {
  margin: 0,
  backgroundColor: vars.color.background,
  color: vars.color.foreground,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.regular,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('#root', {
  maxWidth: vars.layout.maxWidth,
  margin: '0 auto',
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('button', {
  border: 'none',
  padding: 0,
  background: 'none',
  cursor: 'pointer',
  font: 'inherit',
});

globalStyle('input, textarea, select', {
  font: 'inherit',
});

globalStyle('img, svg, button', { userSelect: 'none' });
