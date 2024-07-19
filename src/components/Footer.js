import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 mt-20">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Hino Ng. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;