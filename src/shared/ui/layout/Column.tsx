import { columnWrapper } from '@shared/ui/layout/Column.css.ts';
import type { ChildrenProps } from '@shared/types/common.ts';
import type { PartialVariants } from '@shared/types/variants.ts';
import clsx from 'clsx';

type ColumnProps = ChildrenProps &
  PartialVariants<typeof columnWrapper> & {
    className?: string;
    gap?: string;
  };

const Column = ({ align, justify, children, width, height, className, gap }: ColumnProps) => {
  return (
    <div
      className={clsx(
        columnWrapper({
          align: align,
          justify: justify,
          width: width,
          height: height,
        }),
        className,
      )}
      style={{ gap: gap }}
    >
      {children}
    </div>
  );
};

export default Column;
