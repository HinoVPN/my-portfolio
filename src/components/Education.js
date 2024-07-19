import React, { useState } from 'react';
import Section from './Section';
import { GraduationCap, X } from 'lucide-react';

// Import your certificate images
import cert1 from '../assets/PolyU_2023_EIE_Degree.jpg';

const EducationItem = ({ title, institution, year, certificate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-start justify-center mb-6 flex-col md:flex-row">
      <GraduationCap className="w-6 h-6 mr-4 text-primary-light dark:text-primary-dark flex-shrink-0 mt-1" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{institution} | {year}</p>
      </div>
      <div className='md:ml-auto'>
      {certificate && (
        <div className="mt-2 w-64">
          <img 
            src={certificate} 
            alt={`Certificate for ${title}`} 
            className="w-32 h-auto cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <img 
              src={certificate} 
              alt={`Certificate for ${title}`} 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <Section id="education" title="Education">
      <EducationItem 
        title="BEng (Hons) Degree Programme in Electronic and Information Engineering"
        institution="The Hong Kong Polytechnic University"
        year="2019 - 2023"
        certificate={cert1}
      />
    </Section>
  );
};

export default Education;