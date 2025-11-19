import { cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';
import { overlay } from 'overlay-kit';
import { Modal } from '../ui/modal/Modal';

export const useModal = () => {
  const openModal = (content: ReactNode) => {
    overlay.open(({ isOpen, unmount }) => (
      <Modal isOpen={isOpen} onClose={unmount}>
        {isValidElement(content)
          ? cloneElement(content as ReactElement<{ onClose: () => void }>, { onClose: unmount })
          : content}
      </Modal>
    ));
  };

  return { openModal };
};
