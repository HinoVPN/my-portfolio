import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 mt-20 border-t border-gray-200 dark:border-gray-800 relative bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* 背景裝飾元素 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-primary-light to-blue-600 dark:from-blue-600 dark:via-primary-dark dark:to-blue-800"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <motion.h2 
              className="text-2xl font-bold mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-light dark:text-primary-dark">H</span>ino<span className="text-primary-light dark:text-primary-dark">N</span>g
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md text-center md:text-left">
              Professional developer dedicated to creating efficient, reliable, and beautiful digital solutions.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <motion.a 
                href="https://github.com/HinoVPN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/hino-ng-7781961aa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="mailto:hino619@gmail.com" 
                className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4" /> Back to Top
            </motion.button>
          </div>
        </div>
        
        <div className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hino Ng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;