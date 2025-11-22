import { style, styleVariants } from '@vanilla-extract/css';
import { typography } from '@shared/styles/typography.css.ts';
import { vars } from '@shared/styles/token.css.ts';
import { recipe } from '@vanilla-extract/recipes';

export const label = styleVariants({
  heading: [typography.body_sb_16],
  subHeading: [typography.body_sb_14],
});

export const description = styleVariants({
  payment: [
    typography.body_r_12,
    {
      whiteSpace: 'pre-wrap',
      textAlign: 'start',
      minWidth: '20rem',
      color: vars.color.grayscale.gray900,
    },
  ],
  price: [typography.body_r_12, { color: vars.color.grayscale.gray700 }],
  priceLabel: [
    typography.body_r_12,
    {
      color: vars.color.grayscale.gray700,
      textAlign: 'start',
      alignSelf: 'stretch',
    },
  ],
  priceDetail: [typography.body_m_16],
});

export const wrapper = styleVariants({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '58.4rem',
  },
  priceUnit: {
    border: `1px solid ${vars.color.grayscale.gray200}`,
    borderRadius: vars.radius.r20,
    padding: vars.space.s4,
  },
});

export const section = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: vars.space.s38,
    paddingRight: vars.space.s38,
    paddingTop: vars.space.s24,
  },

  variants: {
    gap: {
      tight: { gap: vars.space.s12 },
      normal: { gap: vars.space.s20 },
    },
    paddingY: {
      tight: { paddingTop: vars.space.s12, paddingBottom: vars.space.s20 },
      normal: { paddingTop: vars.space.s20, paddingBottom: vars.space.s24 },
    },
  },

  defaultVariants: {
    gap: 'tight',
    paddingY: 'normal',
  },
});

export const formFooter = style({
  position: 'sticky',
  width: '100%',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: vars.color.opacity.white60,
  borderTop: `1px solid ${vars.color.grayscale.gray100}`,
  backdropFilter: 'blur(12px)',
});
