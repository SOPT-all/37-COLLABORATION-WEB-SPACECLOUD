import type { FilterValue } from '@/widgets/space-filter/ui/MainFilter';
import * as React from 'react';

export type ChildrenProps = { children: React.ReactNode };

// refactor
export type SpaceFilterValue = { key: string | null; content: string };

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onChange?: (value: string | SpaceFilterValue) => void;
}

export interface ModalContentProps extends ModalProps {
  value?: FilterValue;
}
