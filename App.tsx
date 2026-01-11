import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = window.innerWidth;
      const index = Math.round(scrollLeft / width);
      const sections = ['home', 'about', 'contact'];
      if (sections[index]) {
        setActiveSection(sections[index]);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const sections = ['home', 'about', 'contact'];
    const index = sections.indexOf(id);
    if (index !== -1) {
      container.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="h-screen w-full relative overflow-hidden flex flex-col">
      <Header activeSection={activeSection} onNavClick={scrollToSection} />
      
      <main 
        ref={scrollContainerRef}
        className="flex-grow flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
      >
        <section id="home" className="snap-start w-screen h-full shrink-0">
          <HeroSlider />
        </section>
        
        <section id="about" className="snap-start w-screen h-full shrink-0">
          <About />
        </section>
        
        <section id="contact" className="snap-start w-screen h-full shrink-0">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;