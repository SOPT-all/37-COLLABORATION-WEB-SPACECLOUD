import { style } from '@vanilla-extract/css';
import { colorToken, spaceToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';
import { vars } from '@/shared/styles/token.css';

export const container = style({
  backgroundColor: colorToken.grayscale.gray300,
  flexShrink: 0,
  padding: '51px 103px 64px 104px',
});

export const logoImage = style({
  width: '168px',
  height: '33px',
});

export const divider = style({
  width: '100%',
  height: 0,
  border: `1px solid ${colorToken.grayscale.gray400}`,
  marginTop: spaceToken.s24,
  marginBottom: '31px',
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
});

export const contentSection = style([
  typography.body_r_12_2,
  {
    display: 'flex',
    alignItems: 'center',
    gap: spaceToken.s8,
    color: colorToken.grayscale.gray800,
  },
]);

export const contentFont = style([typography.body_r_12_2, { color: colorToken.grayscale.gray800 }]);

export const centerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spaceToken.s8,
});

export const bottomContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: spaceToken.s40,
});

export const arrowContent = style({
  display: 'flex',
  alignItems: 'center',
});

export const padding = style([
  typography.body_r_12_2,
  {
    paddingRight: vars.space.s6,
  },
]);
