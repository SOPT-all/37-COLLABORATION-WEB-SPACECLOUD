import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/token.css';
import { typography } from '@/shared/styles/typography.css';

export const btn = recipe({
  base: {
    width: 128,
    padding: `${vars.space.s14} ${vars.space.s26}`,
    borderRadius: 30,
  },
  variants: {
    clicked: {
      true: [
        typography.body_b_16,
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: vars.color.primary[200],
          color: vars.color.grayscale.white,
        },
      ],
      false: [
        typography.body_m_16,
        {
          backgroundColor: vars.color.grayscale.gray300,
          color: vars.color.primary[200],
        },
      ],
    },
  },
});
