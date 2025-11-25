import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/token.css';
import { typography } from '@/shared/styles/typography.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  padding: `${vars.space.s52} ${vars.space.s32}`,
  backgroundColor: vars.color.grayscale.white,
  gap: vars.space.s36,
  width: '458px',
  height: '240px',
});

export const commentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.s8,
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.s16,
});

export const title = style([typography.body_m_18, { textAlign: 'center' }]);

export const contentFont = style([
  typography.body_r_13,
  { color: vars.color.grayscale.gray700, textAlign: 'center' },
]);
