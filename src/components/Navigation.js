import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { theme } from '../constants/constants';

const NavLink = ({ href, children, onClick }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors`}
    >
      {children}
    </a>
  );
};

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full ${theme.section.background.light} ${theme.section.background.dark} shadow-sm z-10 transition-colors duration-200`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className={`font-bold text-xl ${theme.icon.light} ${theme.icon.dark}`}>HN</a>
        <div className="hidden items-center md:flex space-x-6 ">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <ThemeToggle />
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-text-light dark:text-text-dark">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-background-light dark:bg-background-dark z-20 pt-16 transition-colors duration-200">
          <div className="container mx-auto px-6 py-8 flex flex-col space-y-4">
            <NavLink href="#about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink href="#education" onClick={() => setMenuOpen(false)}>Education</NavLink>
            <NavLink href="#experience" onClick={() => setMenuOpen(false)}>Experience</NavLink>
            <NavLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </div>
          <button 
            onClick={() => setMenuOpen(false)}
            className={`absolute top-4 right-4 text-text-light dark:text-text-dark bg-primary-light dark:bg-primary-dark bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors`}
          >
            <X size={24} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;