import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <div className={`w-14 p-1 rounded-full transition-colors duration-300 ${
        isDarkMode ? "bg-background-dark" : "bg-background-light"
      }`}>
        <div className={`w-fit p-0.5 shadow-sm rounded-full transition-all duration-300 ${
          isDarkMode
            ? "bg-background-dark translate-x-6"
            : "bg-background-light -translate-x-0"
        }`}>
          {isDarkMode 
            ? <Moon size={20} className="text-text-dark" />
            : <Sun size={20} className="text-text-light" />
          }
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;