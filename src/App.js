import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Header />
      <main className="container mx-auto px-6">
        <About />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;