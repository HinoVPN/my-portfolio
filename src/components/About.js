import React from 'react';
import Section from './Section';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <p className="text-lg leading-relaxed text-justify">
      Hello, my name is Hino, and I hold a BEng (Hons) Degree in Electronic and Information Engineering from Hong Kong, earned in August 2023. Currently, I am a Programmer at St. Teresa's Hospital, where I focus on in-house development within a medical technology environment. My role involves designing, developing, testing, and maintaining applications as a full-stack developer using frameworks such as Angular, Node.js, React Native, and Android. I collaborate closely with business teams to deliver digital solutions aligned with clinical needs, actively participate in all phases of the SDLC, and ensure smooth integration of internal systems through APIs. I am committed to staying up-to-date with healthcare technology trends and continuously enhancing products to improve healthcare workflows and processes.
      </p>
    </Section>
  );
};

export default About;