import { cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';
import { overlay } from 'overlay-kit';
import { Modal } from '../ui/modal/Modal';

export const useModal = () => {
  const openModal = (
    content: ReactNode,
    trigger?: HTMLElement | null,
    border?: 'none' | 'gray300',
    onExit?: () => void, // 모달 close 시 실행될 콜백
  ) => {
    overlay.open(({ isOpen, unmount }) => {
      const handleClose = () => {
        onExit?.();
        unmount();
      };

      const modalContent = isValidElement(content)
        ? cloneElement(content as ReactElement<{ onClose: () => void }>, {
            onClose: handleClose,
          })
        : content;

      return (
        <Modal
          isOpen={isOpen}
          border={border ? border : 'none'}
          onClose={handleClose}
          triggerElement={trigger}
        >
          {modalContent}
        </Modal>
      );
    });
  };

  return { openModal };
};
