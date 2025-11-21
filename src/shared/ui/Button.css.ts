import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/token.css.ts';

// old에서 불편함을 개선한 recipe입니다.
export const buttonBase = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: vars.color.primary['200'],
    backgroundColor: vars.color.grayscale.white,
    borderRadius: vars.radius.r5,
    whiteSpace: 'nowrap',
    padding: '16px 16px',
  },

  variants: {
    styleType: {
      // 스타일링을 지정하지
      none: {},
      // 검색 버튼 스타일링에 사용합니다.
      search: {
        color: vars.color.grayscale.white,
        backgroundColor: vars.color.primary['300'],
        borderRadius: vars.radius.r50,
        padding: '15px 72px',
        ':disabled': {
          backgroundColor: vars.color.primary['100'],
        },
      },
      // 지역 필터 버튼 스타일링에 사용합니다.
      locationFilter: {
        color: vars.color.grayscale.gray600,
        backgroundColor: vars.color.grayscale.gray100,
        padding: `13px 20px`,
        borderRadius: vars.radius.r5,
      },
      // 지역 필터 모달이 활성화 시 사용하는 지역 필터 버튼 스타일입니다.
      locationFilterActive: {
        color: vars.color.grayscale.gray900,
        border: `2px solid ${vars.color.primary['300']}`,
        padding: `13px 20px`,
        borderRadius: vars.radius.r5,
      },
      // 지역 필터에서 요소가 선택되었을 때 사용합니다.
      locationFilterSelected: {
        color: vars.color.primary['300'],
        backgroundColor: vars.color.grayscale.gray100,
        border: `2px solid ${vars.color.primary['100']}`,
        padding: `13px 20px`,
        borderRadius: vars.radius.r5,
      },
      // 지역 필터에 요소가 선택되어 있고, 모달이 활성화되었을 때 사용합니다.
      locationFilterSelectedActive: {
        color: vars.color.primary['300'],
        backgroundColor: vars.color.grayscale.gray100,
        border: `2px solid ${vars.color.primary['300']}`,
        padding: `13px 20px`,
        borderRadius: vars.radius.r5,
      },
      // 공간 선택 버튼 스타일링에 사용합니다.
      places: {
        backgroundColor: vars.color.grayscale.gray100,
        color: vars.color.grayscale.gray800,
        borderRadius: vars.radius.r5,
        padding: `9px 10px`,
      },
      // 위치 필터 버튼 스타일링에 사용합니다.
      location: {
        backgroundColor: vars.color.grayscale.white,
        color: vars.color.grayscale.gray800,
        border: `1px solid ${vars.color.grayscale.gray300}`,
        padding: `12px 22px`,

        ':hover': {
          backgroundColor: vars.color.primary[50],
          color: vars.color.primary[200],
          border: `1px solid ${vars.color.primary[200]}`,
        },
      },
      // 위치 세부 필터 버튼 스타일링에 사용합니다.
      area: {
        backgroundColor: vars.color.grayscale.white,
        color: vars.color.grayscale.gray900,
        padding: `12px`,

        ':hover': {
          backgroundColor: vars.color.primary[50],
          color: vars.color.primary[200],
        },
      },
      // 인원수 적용하기, 상세 필터 적용하기 버튼 스타일링에 사용합니다.
      cta: {
        backgroundColor: vars.color.primary['200'],
        color: vars.color.grayscale.white,
        padding: '16px 16px',
      },
      dataFilter: {
        backgroundColor: 'transparent',
        color: vars.color.primary['200'],
        padding: '10px 18px',
        border: `2px solid ${vars.color.primary['200']}`,
        borderRadius: vars.radius.r50,
      },
      dataFilterActive: {
        backgroundColor: vars.color.secondary.yellow100,
        color: vars.color.primary['200'],
        padding: '10px 18px',
      },
    },
    // 버튼의 너비를 지정합니다.
    width: {
      full: { width: '100%' },
      auto: { width: 'auto' },
      min: { width: 'min-content' },
    },
    gap: {
      none: {},
      g4: {
        gap: vars.space.s4,
      },
    },
    justify: {
      center: { justifyContent: 'center' },
      start: { justifyContent: 'flex-start' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
    },
  },
  defaultVariants: {
    width: 'full',
    gap: 'none',
  },
});

// 구 버전입니다.
// 아래의 tone, shape, padding과 함께 사용하는 recipe 입니다.
// 현재는 모두 사용하지 않습니다.
export const buttonBaseOld = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: vars.color.primary['200'],
    whiteSpace: 'nowrap',
  },

  variants: {
    width: {
      full: { width: '100%' },
      auto: { width: 'auto' },
      min: { width: 'min-content' },
    },
    gap: {
      none: {},
      g4: {
        gap: vars.space.s4,
      },
    },
    justify: {
      center: { justifyContent: 'center' },
      start: { justifyContent: 'flex-start' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
    },
  },
  defaultVariants: {
    width: 'full',
    gap: 'none',
  },
});

export const paddingRecipe = recipe({
  variants: {
    paddingVertical: {
      none: {},
      s10: { paddingTop: vars.space.s10, paddingBottom: vars.space.s10 },
      s11: { paddingTop: vars.space.s11, paddingBottom: vars.space.s11 },
      s12: { paddingTop: vars.space.s12, paddingBottom: vars.space.s12 },
      s15: { paddingTop: vars.space.s15, paddingBottom: vars.space.s15 },
      s16: { paddingTop: vars.space.s16, paddingBottom: vars.space.s16 },
      s18: { paddingTop: vars.space.s18, paddingBottom: vars.space.s18 },
      s20: { paddingTop: vars.space.s20, paddingBottom: vars.space.s20 },
    },
    paddingHorizontal: {
      none: {},
      s10: { paddingLeft: vars.space.s10, paddingRight: vars.space.s10 },
      s11: { paddingLeft: vars.space.s11, paddingRight: vars.space.s11 },
      s12: { paddingLeft: vars.space.s12, paddingRight: vars.space.s12 },
      s15: { paddingLeft: vars.space.s15, paddingRight: vars.space.s15 },
      s16: { paddingLeft: vars.space.s16, paddingRight: vars.space.s16 },
      s18: { paddingLeft: vars.space.s18, paddingRight: vars.space.s18 },
      s20: { paddingLeft: vars.space.s20, paddingRight: vars.space.s20 },
    },
  },

  defaultVariants: {
    paddingVertical: 'none',
    paddingHorizontal: 'none',
  },
});

export const shapeRecipe = recipe({
  variants: {
    radius: {
      none: {},
      r30: {
        borderRadius: vars.radius.r30,
      },
      pill: {
        borderRadius: vars.radius.circle,
      },
    },
    outline: {
      none: {},
      border1: {
        border: '1px solid',
      },
      border2: {
        border: `2px solid`,
      },
    },
    stroke: {
      none: {},
      primary200: { borderColor: vars.color.primary['200'] },
      primary100: { borderColor: vars.color.primary['100'] },
      primary50: { borderColor: vars.color.primary['50'] },
      gray200: { borderColor: vars.color.grayscale.gray200 },
      gray300: { borderColor: vars.color.grayscale.gray300 },
    },
  },

  defaultVariants: {
    radius: 'none',
    outline: 'none',
    stroke: 'none',
  },
});

export const toneRecipe = recipe({
  variants: {
    background: {
      none: {},
      primary300: { backgroundColor: vars.color.primary['300'] },
      primary200: { backgroundColor: vars.color.primary['200'] },
      primary100: { backgroundColor: vars.color.primary['100'] },
      primary50: { backgroundColor: vars.color.primary['50'] },
      gray300: { backgroundColor: vars.color.grayscale.gray300 },
      gray100: { backgroundColor: vars.color.grayscale.gray100 },
      white: { backgroundColor: vars.color.grayscale.white },
    },
    color: {
      none: {},
      white: { color: vars.color.grayscale.white },
      black: { color: vars.color.grayscale.black },
      gray800: { color: vars.color.grayscale.gray800 },
      gray900: { color: vars.color.grayscale.gray900 },
      yellow100: { color: vars.color.secondary.yellow100 },
      primary200: { color: vars.color.primary['200'] },
    },
  },

  defaultVariants: {
    background: 'none',
    color: 'none',
  },
});
