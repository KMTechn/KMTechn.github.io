import { createContext, useState, useMemo, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    htmlElement.setAttribute('data-theme', theme);
    bodyElement.setAttribute('data-theme', theme);

    console.log('ThemeProvider: Set data-theme to', theme);
    console.log('HTML has data-theme:', htmlElement.getAttribute('data-theme'));
    console.log('Body has data-theme:', bodyElement.getAttribute('data-theme'));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
