import { styleVariants } from '@vanilla-extract/css';
import { spaceToken } from '@shared/styles/tokens';

export const dividerSpacing = styleVariants({
  top: {
    margin: `${spaceToken.s20} 0 ${spaceToken.s24} 0`,
  },
  bottom: {
    margin: `${spaceToken.s28} 0`,
  },
});
