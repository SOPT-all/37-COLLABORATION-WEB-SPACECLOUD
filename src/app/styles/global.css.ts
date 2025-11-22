import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('html, body, #root', {
  height: '100%',
});

globalStyle('body', {
  margin: 0,
  backgroundColor: vars.color.grayscale.white,
  color: vars.color.grayscale.gray900,
  fontFamily: vars.font.family.pretendard,
  fontSize: vars.font.size.s16,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.h18,
  letterSpacing: vars.font.letterSpacing.tight_05,
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
