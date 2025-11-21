import {
  cloneElement,
  type CSSProperties,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';
import { overlay } from 'overlay-kit';
import { Modal } from '../ui/modal/Modal.tsx';

export const useModal = () => {
  const openModal = (content: ReactNode, trigger?: HTMLElement) => {
    let location: CSSProperties | undefined;
    if (trigger) {
      const rect = trigger.getBoundingClientRect();
      location = {
        position: 'fixed',
        top: rect.bottom + 8,
        left: rect.left,
      };
    }

    overlay.open(({ isOpen, unmount }) => (
      <Modal isOpen={isOpen} onClose={unmount} location={location} border={'none'}>
        {isValidElement(content)
          ? cloneElement(content as ReactElement<{ onClose: () => void }>, { onClose: unmount })
          : content}
      </Modal>
    ));
  };
  return { openModal };
};
