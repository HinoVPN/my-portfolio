import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Content = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="p-6 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-200">
      <h1 className="text-2xl font-bold mb-4">
        Current Theme: {isDarkMode ? 'Dark' : 'Light'}
      </h1>
      <p>This is some sample content that will change with the theme.</p>
    </div>
  );
};

export default Content; 