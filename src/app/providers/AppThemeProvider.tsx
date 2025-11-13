import { theme } from "../../shared/styles/theme.css.ts";
import type { ChildrenProps } from "../../shared/types/common.ts";

type AppThemeProviderProps = ChildrenProps & {};

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return <div className={theme}>{children}</div>;
};

export default AppThemeProvider;
