import './styles/reset.css.ts';
import './styles/global.css.ts';
import { AppRouterProvider, AppThemeProvider } from "./providers";

function App() {
  return (
    <AppThemeProvider>
      <AppRouterProvider />
    </AppThemeProvider>
  );
}

export default App;
