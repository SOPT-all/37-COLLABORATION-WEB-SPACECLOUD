import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/token.css';
import { typography } from '@/shared/styles/typography.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.s16,
  padding: `${vars.space.s23} ${vars.space.s37}`,
});

export const header = style([
  typography['body_m_14'],
  {
    display: 'flex',
    alignItems: 'center',
    gap: vars.space.s10,
    border: `1px solid ${vars.color.grayscale.gray200}`,
    borderRadius: vars.radius.r20,
    padding: `${vars.space.s15} ${vars.space.s19}`,
    color: vars.color.grayscale.gray600,
  },
]);

export const active = style({
  color: vars.color.grayscale.gray900,
});

export const regionGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space.s10,
});

export const regionLabel = style({
  width: '64px',
  textAlign: 'center',
  color: 'inherit',
});

export const areaGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.s8,
});

export const areaLabel = style({
  width: '144px',
  textAlign: 'left',
  color: 'inherit',
});
