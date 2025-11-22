import {
  cloneElement,
  type CSSProperties,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';
import { overlay } from 'overlay-kit';
import { Modal } from '../ui/modal/Modal';

export const useModal = () => {
  const openModal = (
    content: ReactNode,
    trigger?: HTMLElement | null,
    border?: 'none' | 'gray300',
  ) => {
    let location: CSSProperties | undefined;

    if (trigger) {
      const rect = trigger.getBoundingClientRect();
      location = {
        position: 'absolute',
        top: `${rect.bottom + 8}px`,
        left: `${rect.left}px`,
        margin: 0,
      };
    }

    overlay.open(({ isOpen, unmount }) => (
      <Modal
        isOpen={isOpen}
        onClose={unmount}
        location={location}
        border={border ? border : 'none'}
      >
        {isValidElement(content)
          ? cloneElement(content as ReactElement<{ onClose: () => void }>, { onClose: unmount })
          : content}
      </Modal>
    ));
  };

  return { openModal };
};
