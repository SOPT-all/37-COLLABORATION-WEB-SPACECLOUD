import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import { QueryProvider } from '@app/providers/QueryProvider.tsx';
import { OverlayProvider } from 'overlay-kit';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </QueryProvider>
  </StrictMode>,
);
