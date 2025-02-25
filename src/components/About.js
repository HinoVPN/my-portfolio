import React from 'react';
import Section from './Section';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <p className="text-lg leading-relaxed text-justify">
      Hello, my name is Hino, and I hold a BEng (Hons) Degree in Electronic and Information Engineering from Hong Kong, earned in August 2023. Currently, I am a Programmer at the Hospital Authority, specializing in Clinical Application Development (CAD) for hospital systems serving over one million users. My role involves developing complex clinical applications and mobile solutions, leveraging modern technologies such as Generative AI, Large Language Models (LLM), and IoT to drive Smart Hospital initiatives in Hong Kong. I work extensively with Java (EJB, Spring Boot) and React for web development, managing and maintaining databases like Oracle, MSSQL, and MySQL. Committed to technical excellence, I embrace open-source culture and advanced engineering practices to enhance healthcare workflows and improve system efficiency.
      </p>
    </Section>
  );
};

export default About;