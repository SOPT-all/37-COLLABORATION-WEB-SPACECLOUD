import type { ChildrenProps } from '@shared/types/common.ts';
import type { PartialVariants } from '@shared/types/variants.ts';
import { rowBase } from '@shared/ui/layout/Row.css.ts';
import clsx from 'clsx';

type RowProps = ChildrenProps &
  PartialVariants<typeof rowBase> & {
    gap?: string;
    className?: string;
  };

const Row = ({ children, gap, width, justify, align, className }: RowProps) => {
  return (
    <div
      className={clsx(rowBase({ align: align, justify: justify, width: width }), className)}
      style={{ gap: `${gap}` }}
    >
      {children}
    </div>
  );
};

export default Row;
