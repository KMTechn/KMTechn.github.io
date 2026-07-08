import { createContext, useMemo, useEffect } from 'react';

export const ThemeContext = createContext();

const THEME = 'light';

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    htmlElement.setAttribute('data-theme', THEME);
    bodyElement.setAttribute('data-theme', THEME);
  }, []);

  const value = useMemo(() => ({
    theme: THEME
  }), []);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
