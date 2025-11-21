import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const slider = style({
  position: 'relative',
  width: '100%',
  height: '1.2rem',
});

export const track = style({
  position: 'absolute',
  top: '50%',
  left: 0,
  right: 0,
  height: '0.2rem',
  transform: 'translateY(-50%)',
  borderRadius: 999,
  backgroundColor: vars.color.grayscale.gray300,
});

export const range = style({
  position: 'absolute',
  top: '50%',
  height: '0.4rem',
  transform: 'translateY(-40%)',
  border: 'none',
  borderRadius: 999,
  backgroundColor: vars.color.primary['200'],
});

export const thumb = style({
  position: 'absolute',
  transform: 'translateY(-10%)',
  width: '100%',
  background: 'none',
  // 네이티브 엔진의 UI 스타일 제거
  WebkitAppearance: 'none',
  // 웹킷 외 제거
  appearance: 'none',
  // input 자체는 클릭/드래그 이벤트를 받지 않게 함
  // thumb 가상 요소만 pointerEvents: auto 로 열어둘 계획
  pointerEvents: 'none',
  selectors: {
    // Chrome, Safari, Edge, Opera
    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      appearance: 'none',
      // thum 드래그
      pointerEvents: 'auto',
      width: '1.2rem',
      height: '1.2rem',
      borderRadius: '50%',
      backgroundColor: vars.color.grayscale.white,
      boxShadow: `0 0 0 1px ${vars.color.primary['200']}`,
      cursor: 'pointer',
    },
    /* firefox */
    '&::-moz-range-thumb': {
      pointerEvents: 'auto',
      width: '1.2rem',
      height: '1.2rem',
      borderRadius: '50%',
      backgroundColor: vars.color.grayscale.white,
      boxShadow: `0 0 0 1px ${vars.color.primary['200']}`,
      cursor: 'pointer',
    },
    // firefox track 기본 스타일 제거
    '&::-moz-range-track': {
      background: 'transparent',
    },
  },
});

// 겹칠 때 z-index 조절용
export const thumbMin = style({
  zIndex: 2,
  // 좌측 튀어나온 부분 보정
  marginLeft: '-0.6rem',
});

export const thumbMax = style({
  zIndex: 3,
});
