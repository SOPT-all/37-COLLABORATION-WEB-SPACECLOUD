import { styleVariants } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const typography = styleVariants({
  // ===== Head =====
  head_b_24: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.bold,          // Bold
    fontSize: vars.fontSize['24'],             // 24px
    lineHeight: vars.lineHeight['28'],         // 28
    letterSpacing: vars.letterSpacing.tight_03, // -0.3%
  },

  head_sb_20: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.semibold,      // SemiBold
    fontSize: vars.fontSize['20'],             // 20px
    lineHeight: vars.lineHeight['20'],         // 20
    letterSpacing: vars.letterSpacing.tight_05, // -0.5%
  },

  // ===== Body =====
  body_sb_18: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.semibold,      // Semibold
    fontSize: vars.fontSize['18'],             // 18px
    lineHeight: vars.lineHeight['20'],         // 20
    letterSpacing: vars.letterSpacing.tight_03, // -0.3%
  },

  body_m_18: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.medium,        // Medium
    fontSize: vars.fontSize['18'],             // 18px
    lineHeight: vars.lineHeight['20'],         // 20
    letterSpacing: vars.letterSpacing.tight_03, // -0.3%
  },

  body_sb_16: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.semibold,      // Semibold
    fontSize: vars.fontSize['16'],             // 16px
    lineHeight: vars.lineHeight['24'],         // 24
    letterSpacing: vars.letterSpacing.tight_04, // -0.4%
  },

  body_m_16: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.medium,        // Medium
    fontSize: vars.fontSize['16'],             // 16px
    lineHeight: vars.lineHeight['18'],         // 18
    letterSpacing: vars.letterSpacing.tight_03, // -0.3%
  },

  body_sb_14: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.semibold,      // Semibold
    fontSize: vars.fontSize['14'],             // 14px
    lineHeight: vars.lineHeight['16'],         // 16
    letterSpacing: vars.letterSpacing.tight_03, // -0.3%
  },

  // 이미지 스펙 기준: 이름은 14지만 Font Size는 12px로 설정되어 있음
  body_m_14: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.medium,        // Medium
    fontSize: vars.fontSize['12'],             // 12px
    lineHeight: vars.lineHeight['14'],         // 14
    letterSpacing: vars.letterSpacing.tight_03, // -0.3%
  },

  body_sb_12: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.semibold,      // Semibold
    fontSize: vars.fontSize['12'],             // 12px
    lineHeight: vars.lineHeight['16'],         // 16
    letterSpacing: vars.letterSpacing.tight_03, // -0.3%
  },

  body_r_13: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.regular,       // Regular
    fontSize: vars.fontSize['13'],             // 13px
    lineHeight: vars.lineHeight['18'],         // 18
    letterSpacing: vars.letterSpacing.tight_03, // -0.3%
  },

  body_m_12: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.medium,        // Medium
    fontSize: vars.fontSize['12'],             // 12px
    lineHeight: vars.lineHeight['14'],         // 14
    letterSpacing: vars.letterSpacing.tight_03, // -0.3%
  },

  body_r_12: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.regular,       // Regular
    fontSize: vars.fontSize['12'],             // 12px
    lineHeight: vars.lineHeight['18'],         // 18
    letterSpacing: vars.letterSpacing.tight_03, // -0.3%
  },

  body_r_12_2: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.regular,       // Regular
    fontSize: vars.fontSize['12'],             // 12px
    lineHeight: vars.lineHeight['14'],         // 14
    letterSpacing: vars.letterSpacing.tight_03, // -0.3%
  },

  body_r_10: {
    fontFamily: vars.font.pretendard,
    fontWeight: vars.fontWeight.regular,       // Regular
    fontSize: vars.fontSize['10'],             // 10px
    lineHeight: vars.lineHeight['12'],         // 12
    letterSpacing: vars.letterSpacing.tight_03, // -0.3%
  },
});
