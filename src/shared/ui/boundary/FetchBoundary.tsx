import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FetchErrorFallback } from '@/shared/ui/boundary/FetchErrorFallback';

export const FetchBoundary = ({ children }: { children: React.ReactElement }) => {
  return (
    <ErrorBoundary FallbackComponent={FetchErrorFallback}>
      <Suspense fallback={<div>에러에러</div>}>{children}</Suspense>
    </ErrorBoundary>
  );
};
