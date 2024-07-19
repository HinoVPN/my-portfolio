import React from 'react';
import Section from './Section';
import { Mail, Github, Linkedin, Phone, MessageCircle } from 'lucide-react';
import { theme } from '../constants/constants'; 

const ContactCard = ({ Icon, title, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`block p-6 ${theme.section.background.light} ${theme.section.background.dark} rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out`}
  >
    <div className="flex items-center mb-4">
      <Icon className={`w-8 h-8 ${theme.icon.light} ${theme.icon.dark} mr-3`} />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="break-all">{value}</p>
  </a>
);

const Contact = () => {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ContactCard
          Icon={Github}
          title="GitHub"
          value="HinoVPN"
          href="https://github.com/HinoVPN"
        />
        {/* <ContactCard
          Icon={Phone}
          title="Phone"
          value="+852 9704 6097"
          href="tel:+85297046097"
        /> */}
        <ContactCard
          Icon={MessageCircle}
          title="WhatsApp"
          value="+852 9704 6097"
          href="https://wa.me/85297046097"
        />
        <ContactCard
          Icon={Linkedin}
          title="LinkedIn"
          value="Hino Ng"
          href="https://www.linkedin.com/in/hino-ng-7781961aa/"
        />
        <ContactCard
          Icon={Mail}
          title="Email"
          value="hino619@gmail.com"
          href="mailto:hino619@gmail.com"
        />
      </div>
    </Section>
  );
};

export default Contact;