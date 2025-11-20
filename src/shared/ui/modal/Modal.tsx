import type { CSSProperties } from 'react';
import type { ChildrenProps, ModalProps } from '@/shared/types/common';
import * as s from './Modal.css';

interface Props extends ChildrenProps, ModalProps {
  location?: CSSProperties;
  border: 'none' | 'gray300';
}

export const Modal = ({ onClose, children, location, border }: Props) => {
  return (
    <div className={s.overlay} onClick={onClose}>
      <section
        className={s.content({ border: `${border}` })}
        onClick={(e) => e.stopPropagation()}
        style={location}
      >
        {children}
      </section>
    </div>
  );
};
