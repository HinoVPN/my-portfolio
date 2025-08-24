import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Section from './Section';

const projectsData = [
  {
    title: "Resume Builder",
    description: "A comprehensive resume builder with multi-language support, rich text editing, and DOCX export functionality. Features step-by-step form wizard, drag-and-drop section ordering, and real-time preview.",
    demoUrl: "https://github.com/HinoVPN/my-resume-builder",
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'TailwindCSS', 'i18next', 'TinyMCE']
  },
  {
    title: "Cashflow Calculator",
    description: "A practical cashflow calculation and management tool that helps users track and analyze personal financial status.",
    demoUrl: "https://hinovpn.github.io/cashflow-calculator/",
    technologies: ['React', 'JavaScript', 'CSS3', 'GitHub Pages']
  },
  {
    title: "Markdown Generator",
    description: "An intuitive Markdown document generation tool with real-time preview functionality, making document writing more efficient.",
    demoUrl: "https://hinovpn.github.io/markdown-generator/",
    technologies: ['React', 'Markdown', 'JavaScript', 'GitHub Pages']
  },
  {
    title: "HKO Weather Report",
    description: "A weather application integrating Hong Kong Observatory API, providing real-time weather information and forecast services.",
    demoUrl: "https://hinovpn.github.io/hko-weather-report/",
    technologies: ['React', 'API Integration', 'Weather API', 'GitHub Pages']
  }
];

const ProjectCard = ({ title, description, demoUrl, technologies }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
            {title}
          </h3>
          <motion.a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light dark:text-primary-dark hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-4">
          {technologies && (
            <div>
              <h5 className="text-sm uppercase tracking-wider font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Tech Stack
              </h5>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <motion.a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors font-medium text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Projects;