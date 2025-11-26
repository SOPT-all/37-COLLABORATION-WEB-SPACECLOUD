import { style } from '@vanilla-extract/css';
import { colorToken, spaceToken, radiusToken } from '@/shared/styles/tokens';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  position: 'relative',
  display: 'inline-block',
});

export const sortMenuWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '156px',
  height: '36px',
  padding: '10px 16px',
  background: 'white',
  cursor: 'pointer',
});

export const sortMenu = style([typography.body_m_14]);

export const optionsContainer = style({
  position: 'absolute',
  top: 'calc(90%)',
  right: 0,
  zIndex: 1000,
  padding: `${spaceToken.s12} ${spaceToken.s8}`,
  borderRadius: radiusToken.r16,
  boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  width: '156px',
  height: '168px',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: colorToken.grayscale.white,
});

export const optionList = style([
  typography.body_m_14,
  {
    all: 'unset',
    padding: `${spaceToken.s10} ${spaceToken.s16}`,
    cursor: 'pointer',

    selectors: {
      '&:hover': {
        backgroundColor: colorToken.primary[50],
        borderRadius: radiusToken.r4,
        color: colorToken.primary[200],
      },
    },
  },
]);
