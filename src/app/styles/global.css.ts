import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

globalStyle('html, body, #root', {
  height: '100%',
});

globalStyle('body', {
  margin: 0,
  backgroundColor: vars.color.grayscale.white,
  color: vars.color.grayscale.gray900,
  fontFamily: vars.font.pretendard,
  fontSize: vars.fontSize["16"],
  fontWeight: vars.fontWeight.medium,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('#root', {
  margin: '0 auto',
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
