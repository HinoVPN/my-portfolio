import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { GraduationCap, X, Award } from 'lucide-react';

// Import your certificate images
import cert1 from '../assets/PolyU_2023_EIE_Degree.jpg';

const EducationItem = ({ title, institution, year, description, certificate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div 
      className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex items-start">
          <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-4">
            <GraduationCap className="w-6 h-6 text-primary-light dark:text-primary-dark" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-lg text-primary-light dark:text-primary-dark mb-2">{institution}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{year}</p>
            {description && (
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            )}
          </div>
        </div>
      </div>
      
      {certificate && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Award className="w-5 h-5 text-primary-light dark:text-primary-dark mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Certificate</span>
            </div>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-primary-light dark:text-primary-dark hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificate
            </motion.button>
          </div>
        </div>
      )}
      
      {isModalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative bg-white dark:bg-gray-900 p-2 rounded-lg max-w-3xl max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.3 }}
          >
            <img 
              src={certificate} 
              alt={`Certificate for ${title}`} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <motion.button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

const Education = () => {
  return (
    <Section id="education" title="Education">
      <EducationItem 
        title="BEng (Hons) Degree Programme in Electronic and Information Engineering"
        institution="The Hong Kong Polytechnic University"
        year="2019 - 2023"
        description="Completed a comprehensive curriculum focused on electronic systems, information processing, and software development. Gained practical experience in designing and implementing various technological solutions, with a particular emphasis on application development and system integration."
        certificate={cert1}
      />
    </Section>
  );
};

export default Education;