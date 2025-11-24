import { FallbackProps } from 'react-error-boundary';
import { getErrorDataByCode } from '@shared/ui/boundary/getErrorDataByCode';
import { useNavigate } from 'react-router-dom';
import Button from '@/shared/ui/Button';

export const GlobalErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();
  const navigatePage = (to: string) => {
    // resetErrorBoundary를 호출하여 에러를 초기화
    resetErrorBoundary();
    navigate(to);
  };
  const errorData = getErrorDataByCode(error);
  return (
    <div>
      <h1>{errorData.code}</h1>
      <h2>{errorData.message}</h2>
      <Button onClick={() => navigatePage(errorData.requireLogin ? '/login' : '/main')}>
        {errorData.requireLogin ? '로그인 이동' : '메인화면 이동'}
      </Button>
    </div>
  );
};
