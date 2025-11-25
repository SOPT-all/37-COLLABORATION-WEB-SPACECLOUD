import * as React from 'react';

export type ChildrenProps = { children: React.ReactNode };

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export interface BaseApiResponse<T> {
  success: boolean;
  code: string;
  message: string;
  data: T;
}
