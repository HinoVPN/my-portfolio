import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { theme } from '../constants/constants';

const ThemeWrapper = ({ children, className = '' }) => {
  const { isDarkMode } = useTheme();

  return (
    <div 
      className={`
        ${className}
        ${isDarkMode ? theme.background.dark + ' ' + theme.text.dark : theme.background.light + ' ' + theme.text.light}
        transition-colors duration-200 ease-in-out
      `}
    >
      {children}
    </div>
  );
};

export default ThemeWrapper;