import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { GlobalErrorFallback } from '@shared/ui/boundary/GlobalErrorFallback';

export const GlobalBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
      <Suspense fallback={<div>에러</div>}>{children}</Suspense>
    </ErrorBoundary>
  );
};
