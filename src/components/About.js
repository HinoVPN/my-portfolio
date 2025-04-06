import React from 'react';
import { motion } from 'framer-motion';
import { Code, LayoutGrid, Database, Cpu, Laptop } from 'lucide-react';
import Section from './Section';

const SkillCard = ({ icon: Icon, title, children }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 mr-4">
        <Icon className="w-6 h-6 text-primary-light dark:text-primary-dark" />
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300">{children}</p>
  </motion.div>
);

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto mb-16">
        <motion.p 
          className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm Hino, holding a BEng (Hons) Degree in Electronic and Information Engineering from Hong Kong Polytechnic University, graduated in August 2023.
        </motion.p>
        <motion.p 
          className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Currently, I work as a Programmer at the Hospital Authority, focusing on Clinical Application Development (CAD) for hospital systems serving over one million users. My work involves developing complex clinical applications and mobile solutions, leveraging modern technologies such as Generative AI, Large Language Models (LLM), and IoT to drive Smart Hospital initiatives in Hong Kong.
        </motion.p>
        <motion.p 
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm proficient in web development using Java (EJB, Spring Boot) and React, and I manage and maintain databases like Oracle, MSSQL, and MySQL. I'm committed to technical excellence, embracing open-source culture and advanced engineering practices to enhance healthcare workflows and improve system efficiency.
        </motion.p>
      </div>
      
      <h3 className="text-2xl font-bold mb-8 text-center">Professional Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard icon={Code} title="Frontend Development">
          Proficient in React, Angular, and Vue.js for building modern responsive user interfaces, with expertise in HTML5, CSS3, and JavaScript.
        </SkillCard>
        
        <SkillCard icon={Database} title="Backend Development">
          Skilled in Java (EJB, Spring Boot), Node.js, and .NET for developing reliable backend services, capable of designing RESTful APIs and GraphQL services.
        </SkillCard>
        
        <SkillCard icon={Laptop} title="Mobile Development">
          Experienced in developing Android and iOS applications, familiar with React Native framework for building cross-platform mobile application solutions.
        </SkillCard>
        
        <SkillCard icon={Database} title="Database Management">
          Proficient in relational databases like Oracle, MSSQL, MySQL, as well as NoSQL databases like MongoDB for design, optimization, and management.
        </SkillCard>
        
        <SkillCard icon={Cpu} title="AI & Machine Learning">
          Applying generative AI and large language models to develop intelligent medical applications, improving hospital workflows and efficiency.
        </SkillCard>
        
        <SkillCard icon={LayoutGrid} title="UI/UX Design">
          Focused on user experience design, skilled in creating intuitive, aesthetically pleasing, and functional interfaces ensuring usability and accessibility.
        </SkillCard>
      </div>
    </Section>
  );
};

export default About;