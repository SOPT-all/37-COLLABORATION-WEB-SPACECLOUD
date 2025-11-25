import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FetchErrorFallback } from './FetchErrorFallback';
import LoadingView from '@/widgets/error-view/LoadingView';

export const FetchBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={FetchErrorFallback}>
      <Suspense fallback={<LoadingView />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
