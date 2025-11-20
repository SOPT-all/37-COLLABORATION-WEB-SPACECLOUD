import { recipe } from '@vanilla-extract/recipes';

export const columnWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
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
    height: {
      min: { height: 'fit-content' },
      auto: { height: 'auto' },
      full: { height: '100%' },
    },
  },

  defaultVariants: {
    justify: 'start',
    align: 'stretch',
    width: 'auto',
    height: 'auto',
  },
});
