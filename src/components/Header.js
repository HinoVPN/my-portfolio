import React from 'react';
import profileImage from '../assets/profile.jpg';  // Adjust the path as necessary

const Header = () => {

  return (
    <header className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src={profileImage} 
            alt="NG, Tsz Hin" 
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg" 
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h1 className="text-4xl md:text-5xl ml-auto md:mr-auto font-bold mb-4">
            NG, Tsz Hin
          </h1>
          <p className="text-xl opacity-90 mb-6 text-center md:text-left">
            Programmer
          </p>
          <div className='flex justify-center md:justify-start'>
            <a 
              href="#contact" 
              className="bg-primary-light dark:bg-primary-dark text-white px-6 py-2 rounded-full hover:opacity-90 transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;