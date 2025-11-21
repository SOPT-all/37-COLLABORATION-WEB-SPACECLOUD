import * as React from 'react';

export type ChildrenProps = { children: React.ReactNode };

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}
