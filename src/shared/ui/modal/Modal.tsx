import type { CSSProperties } from 'react';
import type { ChildrenProps, ModalProps } from '@/shared/types/common';
import * as s from './Modal.css';
import type { PartialVariants } from '@/shared/types/variants';
import clsx from 'clsx';

type Border = PartialVariants<typeof s.content> & {
  border: 'none' | 'gray300';
};
interface Props extends ChildrenProps, ModalProps, Border {
  location?: CSSProperties;
}

export const Modal = ({ onClose, children, location, border }: Props) => {
  return (
    <div className={s.overlay} onClick={onClose}>
      <section
        className={clsx(s.content({ border: border }))}
        onClick={(e) => e.stopPropagation()}
        style={location}
      >
        {children}
      </section>
    </div>
  );
};
