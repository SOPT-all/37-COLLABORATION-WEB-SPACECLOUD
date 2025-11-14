import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('body, h1, h2, h3, h4, p, figure, blockquote, dl, dd', {
  margin: 0,
});

globalStyle('ul[role="list"], ol[role="list"]', {
  listStyle: 'none',
});

globalStyle('html:focus-within', {
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  minHeight: '100dvh',
  textRendering: 'optimizeSpeed',
  lineHeight: '1.5',
});

globalStyle('img, picture', {
  maxWidth: '100%',
  display: 'block',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('html:focus-within', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      scrollBehavior: 'auto',
    },
  },
});

globalStyle('*, *::before, *::after', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationDuration: '0.01ms',
      animationIterationCount: '1',
      transitionDuration: '0.01ms',
      scrollBehavior: 'auto',
    },
  },
});


globalStyle('html:focus-within', {
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  minHeight: '100dvh',
  textRendering: 'optimizeSpeed',
  lineHeight: '1.5',
});

globalStyle('a:not([class])', {
  textDecorationSkipInk: 'auto',
});

globalStyle('img, picture', {
  maxWidth: '100%',
  display: 'block',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('@media (prefers-reduced-motion: reduce) { html:focus-within }', {
  scrollBehavior: 'auto',
});

globalStyle('@media (prefers-reduced-motion: reduce) { *, *::before, *::after }', {
  animationDuration: '0.01ms !important',
  animationIterationCount: '1 !important',
  transitionDuration: '0.01ms !important',
});
