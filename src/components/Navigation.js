import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { theme } from '../constants/constants';

const NavLink = ({ href, children, onClick }) => {
  return (
    <motion.a 
      href={href} 
      onClick={onClick}
      className={`relative px-3 py-2 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300 font-medium`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.span 
        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-light dark:bg-primary-dark"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 shadow-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm' : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.a 
          href="#" 
          className={`font-bold text-2xl ${theme.icon.light} ${theme.icon.dark} tracking-tighter`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-primary-light dark:text-primary-dark">H</span>ino<span className="text-primary-light dark:text-primary-dark">N</span>g
        </motion.a>
        
        <div className="hidden md:flex items-center space-x-1">
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
        
        <motion.button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden flex items-center text-text-light dark:text-text-dark p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>
      
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-24 overflow-y-auto"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              <NavLink href="#about" onClick={() => setMenuOpen(false)}>About Me</NavLink>
              <NavLink href="#education" onClick={() => setMenuOpen(false)}>Education</NavLink>
              <NavLink href="#experience" onClick={() => setMenuOpen(false)}>Experience</NavLink>
              <NavLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
              <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <span className="mr-3 text-text-light dark:text-text-dark">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
            <motion.button 
              onClick={() => setMenuOpen(false)}
              className={`absolute top-5 right-5 text-text-light dark:text-text-dark bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;