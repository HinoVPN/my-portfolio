import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Mail, Github, Linkedin, Phone, MessageCircle, ExternalLink } from 'lucide-react';

const ContactCard = ({ Icon, title, value, href, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden relative group"
    whileHover={{ y: -5, transition: { duration: 0.3 } }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="absolute -right-12 -bottom-12 w-24 h-24 rounded-full bg-blue-50 dark:bg-blue-900/20 group-hover:scale-150 transition-transform duration-500"></div>
    
    <div className="flex items-center mb-4 relative">
      <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 mr-4 group-hover:bg-primary-light dark:group-hover:bg-primary-dark transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary-light dark:text-primary-dark group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary-light dark:text-primary-dark" />
    </div>
    
    <p className="break-all relative text-gray-600 dark:text-gray-300">{value}</p>
  </motion.a>
);

const Contact = () => {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          If you're interested in my work or have opportunities for collaboration, please feel free to contact me through the following channels
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ContactCard
          Icon={Github}
          title="GitHub"
          value="HinoVPN"
          href="https://github.com/HinoVPN"
          delay={0.1}
        />
        
        <ContactCard
          Icon={MessageCircle}
          title="WhatsApp"
          value="+852 9704 6097"
          href="https://wa.me/85297046097"
          delay={0.2}
        />
        
        <ContactCard
          Icon={Linkedin}
          title="LinkedIn"
          value="Hino Ng"
          href="https://www.linkedin.com/in/hino-ng-7781961aa/"
          delay={0.3}
        />
        
        <ContactCard
          Icon={Mail}
          title="Email"
          value="hino619@gmail.com"
          href="mailto:hino619@gmail.com"
          delay={0.4}
        />
      </div>
      
      <motion.div 
        className="mt-16 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4">Let's Work Together!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          I'm always ready to take on new challenges and project opportunities. Whether it's a full-time position or a freelance project, feel free to contact me.
        </p>
        <motion.a 
          href="mailto:hino619@gmail.com"
          className="inline-flex items-center gap-2 bg-primary-light dark:bg-primary-dark text-white px-6 py-3 rounded-full hover:shadow-lg hover:opacity-90 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Now <Mail className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </Section>
  );
};

export default Contact;