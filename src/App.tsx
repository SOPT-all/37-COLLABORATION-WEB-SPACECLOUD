import './app/styles/reset.css.ts';
import './app/styles/global.css.ts';
import './app/styles/font.css.ts';
import { AppRouterProvider, AppThemeProvider } from "./app/providers";

function App() {
  return (
    <AppThemeProvider>
      <AppRouterProvider />
    </AppThemeProvider>
  );
}

export default App;
