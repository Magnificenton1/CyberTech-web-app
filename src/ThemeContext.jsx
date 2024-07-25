import{ createContext, useState, useContext } from 'react';

// Create a context with 'green' as the default value
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('green');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'green' ? 'orange' : 'green'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);
