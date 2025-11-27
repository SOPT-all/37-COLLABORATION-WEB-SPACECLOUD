import { style } from '@vanilla-extract/css';
import { colorToken, radiusToken, spaceToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const headerWrapper = style({
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: colorToken.grayscale.white,
  zIndex: 1000,
});

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${spaceToken.s24} 0`,
  width: '100%',
  maxWidth: '1129px',
  margin: '0 auto',
});

export const logo = style({
  width: '134px',
  height: '20px',
});

export const searchContainer = style({
  width: '288px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: radiusToken.r16,
  padding: `9px ${spaceToken.s16}`,
  backgroundColor: colorToken.grayscale.gray200,
});

export const searchInput = style([
  typography.body_r_12,
  {
    all: 'unset',
    width: '100%',
  },
]);

export const searchIcon = style({
  width: '14px',
  height: '14px',
});

export const rightContainer = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: spaceToken.s10,
  justifyContent: 'flex-end',
});

export const leftContainer = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});
