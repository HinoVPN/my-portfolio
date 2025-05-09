import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Section from './Section';
import { useTheme } from '../contexts/ThemeContext';
import { theme_rgb } from '../constants/constants';
import { differenceInMonths, differenceInYears, parse } from 'date-fns';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ExperienceItemData = [
  {
    title: "Programmer",
    company: "Hospital Authority - Clinical Application Development (CAD)",
    startDate: "08/2024",
    endDate: "*",
    description: `Assist in the development of lab systems using Java (EJB, Spring Boot). Develop web applications for lab systems using React. Manage and maintain databases (Oracle, MSSQL, MySQL, etc.). Conduct testing post-development in accordance with the Software Development Life Cycle (SDLC).`,
    skills: ['Java','EJB', 'Node.js', 'React', 'Oracle', 'SyBase', 'Spring Boot']
  },
  {
    title: "Programmer",
    company: "St. Teresa's Hospital",
    startDate: "07/2023",
    endDate: "08/2024",
    description: "In-house development within a medical technology environment. Design, develop, test, and maintain applications as a full-stack developer. Collaborate with business teams, participate in all SDLC phases, and ensure smooth integration of internal systems through APIs.",
    skills: ['Android','iOS', 'Node.js', 'React Native', 'MsSQL', 'VB.NET', 'C#', 'NestJS', 'SOAP']
  },
  {
    title: "Full Stack Developer Intern",
    company: "Mrs Cooky Limited",
    startDate: "05/2022",
    endDate: "06/2023",
    description: "Assisted in visual design and development of landing pages. Implemented responsive design using HTML, CSS, and JavaScript. Supported the development of a no-code interface and API integration between React front-end and Node.js/GraphQL back-end. Built internal platform pages and reusable UI components.",
    skills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js', 'GraphQL', 'MongoDB']
  },
  {
    title: "Product Team Intern",
    company: "Molecule Financial Limited",
    startDate: "12/2021",
    endDate: "05/2022",
    description: "Improved company website design and user experience using Webflow. Integrated CMS for marketing workflows and conducted mobile app testing. Developed an internal analytics panel using Retool and interactive user analytics dashboards in Metabase.",
    skills: ['Webflow', 'CMS Integration', 'QA Testing', 'Retool', 'Metabase', 'SQL']
  }
];

const formatPeriod = (startDate, endDate) => {
  if (!startDate) return "";
  
  const start = parse(startDate, "MM/yyyy", new Date());
  const end = endDate === "*" ? new Date() : parse(endDate, "MM/yyyy", new Date());
  
  const years = differenceInYears(end, start);
  const months = differenceInMonths(end, start) % 12;
  const duration = years > 0 || months > 0 ? ` · ${years > 0 ? `${years} yr` : ""} ${months > 0 ? `${months} mos` : ""}`.trim() : "";
  
  return `${monthNames[start.getMonth()]} ${start.getFullYear()} - ${endDate === "*" ? "Present" : monthNames[end.getMonth()] + " " + end.getFullYear()}${duration}`;
};

const ExperienceItem = ({ title, company, startDate, endDate, description, skills }) => {
  const { isDarkMode } = useTheme();
  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--work ${isDarkMode ? 'dark-mode' : ''}`}
      contentStyle={{ 
        background: isDarkMode ? theme_rgb.background.dark : theme_rgb.background.light, 
        color: isDarkMode ? theme_rgb.text.dark : theme_rgb.text.light,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        padding: '2rem'
      }}
      contentArrowStyle={{ 
        borderRight: isDarkMode ? '7px solid rgb(26, 32, 44)' : '7px solid rgb(255, 255, 255)' 
      }}
      date={formatPeriod(startDate, endDate)}
      iconStyle={{ 
        background: isDarkMode ? theme_rgb.icon.dark : theme_rgb.icon.light,
        color: '#ffffff',
        boxShadow: '0 0 0 4px rgba(52, 144, 220, 0.3)',
      }}
      icon={<Briefcase />}
    >
      <h3 className="vertical-timeline-element-title text-xl font-bold">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle text-primary-light dark:text-primary-dark mt-1">{company}</h4>
      <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
      {skills && (
        <div className="mt-6">
          <h5 className="text-sm uppercase tracking-wider font-semibold text-gray-600 dark:text-gray-400 mb-2">Skills</h5>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <Section id="experience" title="Professional Experience">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <VerticalTimeline
          lineColor={isDarkMode ? 'rgb(39, 121, 189, 0.6)' : 'rgb(52, 144, 220, 0.6)'}
          animate={true}
        >
          {ExperienceItemData.map((item, index) => (
            <ExperienceItem 
              key={index}
              title={item.title}
              company={item.company}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
              skills={item.skills}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </Section>
  );
};

export default Experience;