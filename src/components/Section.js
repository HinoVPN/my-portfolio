import React from 'react';

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20">
    <h2 className="text-3xl font-bold mb-8">{title}</h2>
    {children}
  </section>
);

export default Section;