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
    onExit?: () => void, // 모달 close 시 실행될 콜백
  ) => {
    let location: CSSProperties | undefined;

    if (trigger) {
      const rect = trigger.getBoundingClientRect();
      location = {
        top: `${rect.bottom + 8}px`,
        left: `${rect.left}px`,
        margin: 0,
      };
    }

    overlay.open(({ isOpen, unmount }) => {
      const handleClose = () => {
        onExit?.();
        unmount();
      };

      return (
        <Modal
          isOpen={isOpen}
          location={location}
          border={border ? border : 'none'}
          onClose={handleClose}
        >
          {isValidElement(content)
            ? cloneElement(content as ReactElement<{ onClose: () => void }>, {
                onClose: handleClose,
              })
            : content}
        </Modal>
      );
    });
  };

  return { openModal };
};
