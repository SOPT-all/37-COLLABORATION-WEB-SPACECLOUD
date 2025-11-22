import './styles/reset.css.ts';
import './styles/global.css.ts';
import './styles/theme.css.ts';
import { AppRouterProvider } from './providers';
import { OverlayProvider } from 'overlay-kit';
import { QueryProvider } from '@app/providers/QueryProvider.tsx';

function App() {
  return (
    <QueryProvider>
      <OverlayProvider>
        <AppRouterProvider />
      </OverlayProvider>
    </QueryProvider>
  );
}

export default App;
