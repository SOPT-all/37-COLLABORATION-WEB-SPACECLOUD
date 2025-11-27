import { vars } from '@shared/styles/token.css';
import { typography } from '@shared/styles/typography.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '376px',
});

export const top = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${vars.space.s35} ${vars.space.s37} ${vars.space.s24} ${vars.space.s35}`,
});

export const label = style([
  typography['body_sb_16'],
  {
    flexShrink: 0,
    color: vars.color.grayscale.gray900,
  },
]);

export const counter = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: vars.color.grayscale.white,
  border: `1px solid ${vars.color.grayscale.gray100}`,
  borderRadius: vars.radius.r4,
});

export const num = style([
  typography['body_m_16'],
  {
    padding: `${vars.space.s14} ${vars.space.s26}`,
    borderLeft: `1px solid ${vars.color.grayscale.gray100}`,
    borderRight: `1px solid ${vars.color.grayscale.gray100}`,
  },
]);

export const bottom = style({
  borderTop: `1px solid ${vars.color.grayscale.gray100}`,
  padding: `${vars.space.s19} ${vars.space.s37}`,
});
