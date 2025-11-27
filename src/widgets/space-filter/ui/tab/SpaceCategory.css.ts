import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';
import { recipe } from '@vanilla-extract/recipes';
import { typography } from '@shared/styles/typography.css.ts';

export const wrapper = styleVariants({
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space.s25,
    maxWidth: '89.6rem',
    height: '22.9rem',
    alignSelf: 'center',
    margin: '0 auto',
  },

  spaceList: {
    display: 'flex',
    flexDirection: 'row',
    gap: vars.space.s24,
    flexWrap: 'wrap',
  },
});

export const segmentedToggle = style({
  display: 'inline-flex',
  width: 'fit-content',
  background: vars.color.grayscale.white,
  borderRadius: vars.radius.r50,
  boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.10)',
});

export const tabBase = style([
  typography.body_sb_14,
  {
    position: 'relative',
    flex: 1,
    border: 'none',
    background: vars.color.grayscale.white,
    cursor: 'pointer',
    padding: '6px 35px',
    borderRadius: vars.radius.r50,
    color: vars.color.grayscale.gray700,

    selectors: {
      '&:not(:first-child)': {
        marginLeft: -10,
      },
    },
  },
]);

export const tab = recipe({
  base: tabBase,

  variants: {
    active: {
      true: {
        background: vars.color.primary['300'],
        color: vars.color.grayscale.white,
        zIndex: 1,
      },
      false: {},
    },
  },

  defaultVariants: {
    active: false,
  },
});

export const item = styleVariants({
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '6.8rem',
    gap: vars.space.s4,
    padding: `0 5px`,
  },
  icon: {
    width: '5.75rem',
    height: '5.75rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: vars.color.grayscale.gray100,
  },
  label: {
    color: vars.color.grayscale.gray900,
    whiteSpace: 'nowrap',
  },
});

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200px 0' },
  '100%': { backgroundPosition: '200px 0' },
});

const skeletonBase = style({
  backgroundImage: `linear-gradient(
    90deg,
    ${vars.color.grayscale.gray100} 25%,
    ${vars.color.grayscale.gray200} 37%,
    ${vars.color.grayscale.gray100} 63%
  )`,
  backgroundSize: '400% 100%',
  animation: `${shimmer} 1.4s ease-in-out infinite`,
});

export const segmentedToggleSkeleton = style({
  display: 'inline-flex',
  width: 'fit-content',
  borderRadius: vars.radius.r50,
  overflow: 'hidden',
  boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.10)',
});

export const tabSkeleton = style([
  skeletonBase,
  {
    width: '6.5rem',
    height: '2.2rem',
    borderRadius: vars.radius.r50,
    selectors: {
      '&:not(:first-child)': {
        marginLeft: -10,
      },
    },
  },
]);

export const skeletonCircle = style([item.icon, skeletonBase]);

export const skeletonLabel = style([
  skeletonBase,
  {
    width: '4.2rem',
    height: '0.9rem',
    borderRadius: vars.radius.r8,
  },
]);
