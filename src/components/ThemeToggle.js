import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, SunMoon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark`}
      whileTap={{ scale: 0.9 }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDarkMode ? 180 : 0,
          scale: 1 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative"
      >
        {isDarkMode ? (
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="w-5 h-5 text-yellow-300" />
            </motion.div>
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0.8, 1] }}
                transition={{ duration: 0.5 }}
                className="block w-1 h-1 bg-yellow-300 rounded-full"
              />
            </span>
          </div>
        ) : (
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="w-5 h-5 text-yellow-500" />
            </motion.div>
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0.8, 1] }}
                transition={{ duration: 0.5 }}
                className="block w-1 h-1 bg-yellow-500 rounded-full"
              />
            </span>
          </div>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;