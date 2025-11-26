import { type CSSProperties, useEffect, useRef } from 'react';
import type { ChildrenProps, ModalProps } from '@shared/types/common.ts';
import * as s from './Modal.css.ts';
import type { PartialVariants } from '@shared/types/variants.ts';
import { useCalcPosition } from '@/shared/libs/useCalcPosition.ts';

type Border = PartialVariants<typeof s.content> & {
  border: 'none' | 'gray300';
};

interface Props extends ChildrenProps, ModalProps, Border {
  location?: CSSProperties;
  triggerElement?: HTMLElement;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  border,
  borderRadius,
  triggerElement,
}: Props) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  const triggerLocation = useCalcPosition(triggerElement);

  // 최종 위치 - 트리거 요소 없으면 정중앙에 배치
  const computedLocation = triggerLocation ?? {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
  };

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.show();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // 외부 클릭 및 esc 키 닫기 처리
  useEffect(() => {
    if (!isOpen || !onClose) return;
    const dialog = ref.current;
    if (!dialog) return;

    // 화면 어디든 클릭 시 실행
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return; // DOM 노드 아니면 무시
      if (dialog.contains(target)) return; // 클릭한 곳 모달 내부일 때 무시
      if (triggerElement?.contains(target)) return; // 클릭한 곳 모달 여는 곳일 때 무시
      onClose(); // 세가지 다 아닐 때만 닫기 수행
    };

    // 키보드 이벤트 처리
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      onClose();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, triggerElement]);

  return (
    <>
      {isOpen && <div className={s.dim} />}
      <dialog ref={ref} onClose={onClose} style={computedLocation} className={s.dialog}>
        <section className={s.content({ border: `${border}`, borderRadius })}>{children}</section>
      </dialog>
    </>
  );
};
