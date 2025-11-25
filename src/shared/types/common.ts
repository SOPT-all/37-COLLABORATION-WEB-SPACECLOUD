import type { FilterValue, SpaceFilterValue } from '@/widgets/space-filter/types/types';
import * as React from 'react';

export type ChildrenProps = { children: React.ReactNode };
export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onChange?: (value: string | SpaceFilterValue) => void;
}

export interface ModalContentProps extends ModalProps {
  value?: FilterValue;
}

export interface BaseApiResponse<T> {
  success: boolean;
  code: string;
  message: string;
  data: T;
}
export interface BaseApiResponse<T> {
  success: boolean;
  code: string;
  message: string;
  data: T;
}
