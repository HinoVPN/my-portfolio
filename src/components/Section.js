import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({ id, title, children, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id={id} 
      ref={ref}
      className={`py-20 ${className}`}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="relative mb-16 flex items-center">
        <div className="flex-grow h-0.5 bg-gray-200 dark:bg-gray-700"></div>
        <motion.h2 
          className="mx-4 text-3xl sm:text-4xl font-bold text-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-primary-light to-blue-600 dark:from-primary-dark dark:to-blue-400 text-transparent bg-clip-text">
            {title}
          </span>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary-light dark:bg-primary-dark rounded-full"></div>
        </motion.h2>
        <div className="flex-grow h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      </div>
      
      <div className="relative">
        {/* 裝飾元素 */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
        
        {children}
      </div>
    </motion.section>
  );
};

export default Section;