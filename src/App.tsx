import './shared/styles/reset.css.ts';
import './shared/styles/global.css.ts';
import './shared/styles/font.css.ts';
import { AppRouterProvider, AppThemeProvider } from "./app/providers";

function App() {
  return (
    <AppThemeProvider>
      <AppRouterProvider />
    </AppThemeProvider>
  );
}

export default App;
