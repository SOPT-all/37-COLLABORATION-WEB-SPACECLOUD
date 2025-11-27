import { type FallbackProps } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import ErrorModal from '@widgets/error-view/ErrorModal';

export const FetchErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const navigate = useNavigate();

  const handleRetry = () => {
    resetErrorBoundary();
    reset();
  };

  const handleClose = () => {
    resetErrorBoundary();
    navigate('/');
  };

  return <ErrorModal isOpen onClose={handleClose} onRetry={handleRetry} />;
};
