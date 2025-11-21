import { vars } from '@/shared/styles/token.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const filterWrapper = style({
  display: 'flex',
  gap: vars.space.s8,
});

export const selected = style({
  width: '170px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
