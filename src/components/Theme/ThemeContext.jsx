import{ createContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

// Create a context with 'green' as the default value
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'green';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'green' ? 'orange' : 'green'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a valid React node
};
