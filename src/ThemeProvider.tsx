import { useEffect } from "react";
import { MainTheme } from "./styles/MainTheme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-red", MainTheme.colors.red);
    root.style.setProperty("--color-black", MainTheme.colors.black);
    root.style.setProperty("--color-bg", MainTheme.colors.mainBg);
    root.style.setProperty("--font-aileron", MainTheme.fonts.aileron);
  }, []);

  return <>{children}</>;
}
