import { type ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FetchErrorFallback } from './FetchErrorFallback';
import LoadingView from '@/widgets/error-view/LoadingView';

type FetchBoundaryProps = {
  children: ReactNode;
  loadingFallback?: ReactNode;
};

export const FetchBoundary = ({ children, loadingFallback }: FetchBoundaryProps) => {
  return (
    <ErrorBoundary FallbackComponent={FetchErrorFallback}>
      <Suspense fallback={loadingFallback ? loadingFallback : <LoadingView />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
