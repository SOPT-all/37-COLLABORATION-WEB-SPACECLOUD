import type { ChildrenProps, ModalProps } from '@/shared/types/common';
import * as s from './Modal.css';

export const Modal = ({ onClose, children }: ChildrenProps & ModalProps) => {
  return (
    <div className={s.overlay} onClick={onClose}>
      <section className={s.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </section>
    </div>
  );
};
