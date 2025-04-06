import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile.jpg';  // 確保路徑正確

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <header className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* 背景漸變效果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 -z-10"></div>
      
      {/* 裝飾元素 */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <motion.div 
        className="container mx-auto px-6 flex flex-col md:flex-row items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="md:w-1/2 flex justify-center mb-12 md:mb-0"
          variants={itemVariants}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-light to-blue-500 dark:from-primary-dark dark:to-blue-700 rounded-full blur-md opacity-75"></div>
            <motion.img 
              src={profileImage} 
              alt="NG, Tsz Hin" 
              className="relative w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-full shadow-xl border-4 border-white dark:border-gray-800"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 md:pl-12 text-center md:text-left"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary-light to-blue-700 dark:from-gray-100 dark:via-primary-dark dark:to-blue-300 text-transparent bg-clip-text"
            variants={itemVariants}
          >
            NG, Tsz Hin
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6"
            variants={itemVariants}
          >
            Professional Developer • Full-Stack Engineer
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
            variants={itemVariants}
          >
            <motion.a 
              href="#about" 
              className="flex items-center gap-2 bg-primary-light dark:bg-primary-dark text-white px-6 py-3 rounded-full hover:shadow-lg hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More <ArrowDown className="w-4 h-4" />
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-light dark:hover:border-primary-dark transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex justify-center md:justify-start space-x-4"
            variants={itemVariants}
          >
            <motion.a 
              href="https://github.com/HinoVPN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/hino-ng-7781961aa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="mailto:hino619@gmail.com" 
              className="text-gray-600 hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* 向下滾動提示 */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <ArrowDown className="w-8 h-8 text-primary-light dark:text-primary-dark" />
      </motion.div>
    </header>
  );
};

export default Header;