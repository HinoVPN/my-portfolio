import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';
import Section from './Section';
import { useTheme } from '../contexts/ThemeContext';
import { theme_rgb } from '../constants/constants';

const ExperienceItem = ({ title, company, period, description, skills }) => {
  const { isDarkMode } = useTheme();
  return(
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${isDarkMode ? 'dark-mode' : ''}`}
    contentStyle={{ background: isDarkMode ? theme_rgb.background.dark : theme_rgb.background.light, color: isDarkMode ? theme_rgb.text.dark : theme_rgb.text.light }}
    contentArrowStyle={{ borderRight: isDarkMode ? '7px solid rgb(26, 32, 44)' : '7px solid rgb(255, 255, 255)' }}
    date={period}
    iconStyle={{ background: isDarkMode ? theme_rgb.icon.dark : theme_rgb.icon.light, color: isDarkMode ? theme_rgb.text.dark : theme_rgb.text.dark }}
    icon={<Briefcase />}
  >
    <h3 className={`vertical-timeline-element-title font-bold ${isDarkMode ? theme_rgb.text.dark : theme_rgb.text.light}`}>{title}</h3>
    <h4 className={`vertical-timeline-element-subtitle ${isDarkMode ? theme_rgb.icon.dark : theme_rgb.icon.light}`}>{company}</h4>
    <p className={`text-justify mt-2 ${isDarkMode ? theme_rgb.text.dark : theme_rgb.text.light}`}>{description}</p>
    {skills && (
      <div className={`mt-4 ${isDarkMode ? theme_rgb.text.dark : theme_rgb.text.light}`}>
        <strong className={`${isDarkMode ? theme_rgb.text.dark : theme_rgb.text.light}`}>Skills:</strong>
        <div className="flex flex-wrap gap-2 mt-1">
          {skills.map((skill, index) => (
            <span key={index} className={`bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ${isDarkMode ? 'bg-blue-500 text-white' : ''}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}
  </VerticalTimelineElement>
)};

const Experience = () => {
  const { isDarkMode } = useTheme();
  return (
<Section id="experience" title="Career Journey">
  <VerticalTimeline
    lineColor={isDarkMode ? 'rgb(39, 121, 189)' : 'rgb(52, 144, 220)'}
  >
    <ExperienceItem 
      title="Programmer"
      company="Hospital Authority"
      period="Ang 2024 – Present"
      description="In-house development within a medical technology environment. Design, develop, test, and maintain applications as a full-stack developer. Collaborate with business teams, participate in all SDLC phases, and ensure smooth integration of internal systems through APIs."
      skills={['Android','iOS', 'Node.js', 'React Native', 'MsSQL', 'VB.NET', 'C#', 'NestJS', 'SOAP']}
    />
    <ExperienceItem 
      title="Programmer"
      company="St. Teresa's Hospital"
      period="Jul 2023 – Ang 2024"
      description="In-house development within a medical technology environment. Design, develop, test, and maintain applications as a full-stack developer. Collaborate with business teams, participate in all SDLC phases, and ensure smooth integration of internal systems through APIs."
      skills={['Android','iOS', 'Node.js', 'React Native', 'MsSQL', 'VB.NET', 'C#', 'NestJS', 'SOAP']}
    />
    <ExperienceItem 
      title="Full Stack Developer Intern"
      company="Mrs Cooky Limited"
      period="May 2022 – Jun 2023"
      description="Assisted in visual design and development of landing pages. Implemented responsive design using HTML, CSS, and JavaScript. Supported the development of a no-code interface and API integration between React front-end and Node.js/GraphQL back-end. Built internal platform pages and reusable UI components."
      skills={['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js', 'GraphQL', 'MongoDB']}
    />
    <ExperienceItem 
      title="Product Team Intern"
      company="Molecule Financial Limited"
      period="Dec 2021 – May 2022"
      description="Improved company website design and user experience using Webflow. Integrated CMS for marketing workflows and conducted mobile app testing. Developed an internal analytics panel using Retool and interactive user analytics dashboards in Metabase."
      skills={['Webflow', 'CMS Integration', 'QA Testing', 'Retool', 'Metabase', 'SQL']}
    />
  </VerticalTimeline>
</Section>

  );
};

export default Experience;