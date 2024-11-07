import React from 'react';
import Navbar from './components/Navbar';
import ParallaxHero from './components/ParallaxHero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <ParallaxHero />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;