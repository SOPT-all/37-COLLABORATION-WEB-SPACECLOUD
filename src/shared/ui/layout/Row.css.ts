import { recipe } from '@vanilla-extract/recipes';

export const rowBase = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
  },
  variants: {
    align: {
      stretch: { alignItems: 'stretch' },
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
    },
    width: {
      min: { width: 'fit-content' },
      auto: { width: 'auto' },
      full: { width: '100%' },
    },
  },

  defaultVariants: {
    justify: 'start',
    width: 'auto',
  },
});
