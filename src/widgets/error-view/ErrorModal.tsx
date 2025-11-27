import Button from '@shared/ui/Button';
import * as s from './ErrorModal.css';
import { Modal } from '@shared/ui/modal/Modal';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
};

const ErrorModal = ({ isOpen, onClose, onRetry }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} border='none' borderRadius='r20'>
      <div className={s.wrapper}>
        <div className={s.commentWrapper}>
          <span className={s.title}>서비스 이용이 원활하지 않아요</span>
          <span className={s.contentFont}>
            불편을 드려 죄송해요. <br />
            잠시 후에 다시 시도해주세요
          </span>
        </div>
        <div className={s.buttonWrapper}>
          <Button
            styleType='homeButton'
            width='auto'
            gap='g4'
            justify='center'
            font='body_m_16'
            onClick={onClose}
          >
            <span>홈으로 돌아가기</span>
          </Button>
          <Button
            styleType='retryButton'
            width='auto'
            gap='g4'
            justify='center'
            font='body_m_16'
            onClick={onRetry}
          >
            <span>다시 시도하기</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;
