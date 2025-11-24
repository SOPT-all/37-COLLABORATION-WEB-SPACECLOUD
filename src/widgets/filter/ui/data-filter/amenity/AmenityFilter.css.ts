import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/token.css.ts';
import { style } from '@vanilla-extract/css';

export const amenityItemBase = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: `${vars.space.s12} ${vars.space.s16}`,
    borderRadius: vars.radius.r20,
    backgroundColor: vars.color.grayscale.white,
    color: vars.color.grayscale.gray800,
    whiteSpace: 'nowrap',
    cursor: 'pointer',
  },

  variants: {
    active: {
      false: {
        boxShadow: `0 0 0 1px ${vars.color.grayscale.gray300}`,
      },
      true: {
        boxShadow: `0 0 0 1px ${vars.color.primary[200]}`,
        color: vars.color.primary[200],
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});

export const amenityList = style({
  display: 'flex',
  gap: '10px',
  padding: 0,
  flexWrap: 'wrap',
  listStyle: 'none',
});
