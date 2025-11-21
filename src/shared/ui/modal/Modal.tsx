import { type CSSProperties, useEffect, useRef } from 'react';
import type { ChildrenProps, ModalProps } from '@shared/types/common.ts';
import * as s from './Modal.css.ts';

interface Props extends ChildrenProps, ModalProps {
  location?: CSSProperties;
  border: 'none' | 'gray300';
}

export const Modal = ({ isOpen, onClose, children, location, border }: Props) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={ref} onClose={onClose} className={s.dialog} closedby='any'>
      <section style={location} className={s.content({ border: `${border}` })}>
        {children}
      </section>
    </dialog>
  );
};
