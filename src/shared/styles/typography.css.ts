import { styleVariants } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const typography = styleVariants({
  // ===== Head =====
  head_b_24: {
    fontWeight: vars.font.weight.bold,
    fontSize: vars.font.size.s24,
    lineHeight: vars.font.lineHeight.h28,
    letterSpacing: vars.font.letterSpacing.tight_03,
  },

  head_sb_20: {
    fontWeight: vars.font.weight.semibold,
    fontSize: vars.font.size.s20,
    lineHeight: vars.font.lineHeight.h20,
    letterSpacing: vars.font.letterSpacing.tight_05,
  },

  // ===== Body =====
  body_sb_18: {
    fontWeight: vars.font.weight.semibold,
    fontSize: vars.font.size.s18,
    lineHeight: vars.font.lineHeight.h20,
    letterSpacing: vars.font.letterSpacing.tight_03,
  },

  body_m_18: {
    fontWeight: vars.font.weight.medium,
    fontSize: vars.font.size.s18,
    lineHeight: vars.font.lineHeight.h20,
    letterSpacing: vars.font.letterSpacing.tight_03,
  },

  body_b_16: {
    fontWeight: vars.font.weight.bold,
    fontSize: vars.font.size.s16,
    lineHeight: vars.font.lineHeight.h18,
    letterSpacing: vars.font.letterSpacing.tight_00,
  },

  body_sb_16: {
    fontWeight: vars.font.weight.semibold,
    fontSize: vars.font.size.s16,
    lineHeight: vars.font.lineHeight.h24,
    letterSpacing: vars.font.letterSpacing.tight_04,
  },

  body_m_16: {
    fontWeight: vars.font.weight.medium,
    fontSize: vars.font.size.s16,
    lineHeight: vars.font.lineHeight.h18,
    letterSpacing: vars.font.letterSpacing.tight_03,
  },

  body_r_16: {
    fontWeight: vars.font.weight.regular,
    fontSize: vars.font.size.s16,
    lineHeight: vars.font.lineHeight.h18,
    letterSpacing: vars.font.letterSpacing.tight_00,
  },

  body_sb_14: {
    fontWeight: vars.font.weight.semibold,
    fontSize: vars.font.size.s14,
    lineHeight: vars.font.lineHeight.h16,
    letterSpacing: vars.font.letterSpacing.tight_03,
  },

  body_m_14: {
    fontWeight: vars.font.weight.medium,
    fontSize: vars.font.size.s14,
    lineHeight: vars.font.lineHeight.h14,
    letterSpacing: vars.font.letterSpacing.tight_03,
  },

  body_sb_12: {
    fontWeight: vars.font.weight.semibold,
    fontSize: vars.font.size.s12,
    lineHeight: vars.font.lineHeight.h16,
    letterSpacing: vars.font.letterSpacing.tight_03,
  },

  body_r_13: {
    fontWeight: vars.font.weight.regular,
    fontSize: vars.font.size.s13,
    lineHeight: vars.font.lineHeight.h18,
    letterSpacing: vars.font.letterSpacing.tight_03,
  },

  body_m_12: {
    fontWeight: vars.font.weight.medium,
    fontSize: vars.font.size.s12,
    lineHeight: vars.font.lineHeight.h14,
    letterSpacing: vars.font.letterSpacing.tight_03,
  },

  body_r_12: {
    fontWeight: vars.font.weight.regular,
    fontSize: vars.font.size.s12,
    lineHeight: vars.font.lineHeight.h18,
    letterSpacing: vars.font.letterSpacing.tight_03,
  },

  body_r_12_2: {
    fontWeight: vars.font.weight.regular,
    fontSize: vars.font.size.s12,
    lineHeight: vars.font.lineHeight.h14,
    letterSpacing: vars.font.letterSpacing.tight_03,
  },

  body_r_10: {
    fontWeight: vars.font.weight.regular,
    fontSize: vars.font.size.s10,
    lineHeight: vars.font.lineHeight.h12,
    letterSpacing: vars.font.letterSpacing.tight_03,
  },
});
