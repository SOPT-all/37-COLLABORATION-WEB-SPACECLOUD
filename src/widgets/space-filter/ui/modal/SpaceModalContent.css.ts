import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/token.css';
import { typography } from '@/shared/styles/typography.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.s24,
  padding: `${vars.space.s20} ${vars.space.s24}`,
});

export const group = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.s12,
});

export const groupTitle = style([
  typography.body_m_16,
  {
    color: vars.color.grayscale.black,
  },
]);

export const space = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.s8,
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.s4,
  backgroundColor: vars.color.grayscale.gray100,
  color: vars.color.grayscale.gray800,
  borderRadius: vars.radius.r5,
  padding: `9px 10px`,
});

export const icon = style({
  margin: vars.space.s6,
});

export const label = style([
  typography.body_m_16,
  {
    width: '104px',
    textAlign: 'left',
    color: vars.color.grayscale.gray800,
  },
]);
