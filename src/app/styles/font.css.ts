import { globalFontFace } from '@vanilla-extract/css';

// 임시 폰트
globalFontFace('Pretendard', {
  src: `
    url("/fonts/Pretendard-Regular.woff2") format("woff2"),
    url("/fonts/Pretendard-Regular.woff") format("woff")
  `,
  fontWeight: '400',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace('Pretendard', {
  src: `
    url("/fonts/Pretendard-Bold.woff2") format("woff2"),
    url("/fonts/Pretendard-Bold.woff") format("woff")
  `,
  fontWeight: '700',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});
