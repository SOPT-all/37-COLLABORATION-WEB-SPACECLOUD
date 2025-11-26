import { spaceToken } from '@shared/styles/tokens';

type SpacerProps = {
  space: keyof typeof spaceToken;
};

const Spacer = ({ space }: SpacerProps) => (
  <div className='spacer' style={{ height: spaceToken[space] }} aria-hidden='true' />
);

export default Spacer;
