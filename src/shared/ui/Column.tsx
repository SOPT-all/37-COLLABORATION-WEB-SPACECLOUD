import { columnWrapper } from '@shared/ui/Column.css.ts';
import type { ChildrenProps } from '@shared/types/common.ts';
import type { PartialVariants } from '@shared/types/variants.ts';

type ColumnProps = ChildrenProps & PartialVariants<typeof columnWrapper>;

const Column = ({ align, justify, children, width, height }: ColumnProps) => {
  return (
    <div
      className={columnWrapper({
        align: align,
        justify: justify,
        width: width,
        height: height,
      })}
    >
      {children}
    </div>
  );
};

export default Column;
