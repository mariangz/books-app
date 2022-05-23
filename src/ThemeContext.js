import { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');
  const [user, setUser] = useState('');

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  const value = {
    theme: theme,
    toggleTheme: toggleTheme,
    user: 'Mariano',
    setUser: setUser,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
