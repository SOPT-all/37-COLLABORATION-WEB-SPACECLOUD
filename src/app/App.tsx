import './styles/reset.css.ts';
import './styles/global.css.ts';
import { AppRouterProvider, AppThemeProvider } from './providers';
import { OverlayProvider } from 'overlay-kit';

function App() {
  return (
    <AppThemeProvider>
      <OverlayProvider>
        <AppRouterProvider />
      </OverlayProvider>
    </AppThemeProvider>
  );
}

export default App;
