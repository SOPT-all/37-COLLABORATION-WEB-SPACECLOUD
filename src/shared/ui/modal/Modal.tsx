import { type CSSProperties, useEffect, useRef } from 'react';
import type { ChildrenProps, ModalProps } from '@shared/types/common.ts';
import * as s from './Modal.css.ts';
import type { PartialVariants } from '@shared/types/variants.ts';

type Border = PartialVariants<typeof s.content> & {
  border: 'none' | 'gray300';
};

interface Props extends ChildrenProps, ModalProps, Border {
  location?: CSSProperties;
}

export const Modal = ({ isOpen, onClose, children, location, border, borderRadius }: Props) => {
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
    <dialog ref={ref} onClose={onClose} style={location} className={s.dialog} closedby='any'>
      <section style={location} className={s.content({ border: `${border}`, borderRadius })}>
        {children}
      </section>
    </dialog>
  );
};
