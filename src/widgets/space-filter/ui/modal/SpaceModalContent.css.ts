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

export const icon = style({
  margin: vars.space.s6,
});

export const label = style({
  width: '104px',
  textAlign: 'left',
  color: vars.color.grayscale.gray800,
});
