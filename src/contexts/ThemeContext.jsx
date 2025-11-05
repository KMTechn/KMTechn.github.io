import { createContext, useState, useMemo, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 기본값을 'light'로 설정

  // 테마가 변경될 때마다 html과 body 태그의 data-theme 속성을 직접 업데이트합니다.
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    htmlElement.setAttribute('data-theme', theme);
    bodyElement.setAttribute('data-theme', theme);

    // HTML 요소에 속성이 제대로 설정되었는지 확인
    console.log('Theme set to:', theme, 'HTML attr:', htmlElement.getAttribute('data-theme'), 'Body attr:', bodyElement.getAttribute('data-theme'));
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
