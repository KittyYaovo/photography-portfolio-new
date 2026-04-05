import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { About } from './components/About';

// Background parameters component
const BackgroundParams = () => {
  const params = [
    { text: 'ISO: 800', top: '15%', left: '8%' },
    { text: 'F/2.8', top: '25%', right: '12%' },
    { text: 'Steps: 25', top: '45%', left: '5%' },
    { text: 'Prompt_Strength: 0.75', top: '60%', right: '8%' },
    { text: 'CFG: 7.5', top: '75%', left: '15%' },
    { text: 'Sampler: Euler a', top: '85%', right: '15%' },
    { text: 'Resolution: 1920x1080', top: '35%', right: '5%' },
    { text: 'FPS: 24', top: '55%', left: '12%' },
  ];

  return (
    <>
      {params.map((param, index) => (
        <div
          key={index}
          className="param-decoration"
          style={{
            top: param.top,
            left: param.left,
            right: param.right,
          }}
        >
          {param.text}
        </div>
      ))}
    </>
  );
};

// Grid coordinates component
const GridCoordinates = () => {
  const coordinates = [
    { code: 'A-01', top: '10%', left: '10%' },
    { code: 'B-03', top: '20%', right: '15%' },
    { code: 'C-05', top: '30%', left: '20%' },
    { code: 'D-02', top: '40%', right: '25%' },
    { code: 'E-04', top: '50%', left: '30%' },
    { code: 'F-06', top: '60%', right: '35%' },
    { code: 'G-01', top: '70%', left: '40%' },
    { code: 'H-03', top: '80%', right: '45%' },
    { code: 'I-05', top: '15%', right: '8%' },
    { code: 'J-02', top: '35%', left: '12%' },
    { code: 'K-04', top: '55%', right: '18%' },
    { code: 'L-01', top: '75%', left: '25%' },
  ];

  return (
    <>
      {coordinates.map((coord, index) => (
        <div
          key={index}
          className="grid-coordinates"
          style={{
            top: coord.top,
            left: coord.left,
            right: coord.right,
          }}
        >
          {coord.code}
        </div>
      ))}
    </>
  );
};

// Vertical text flow component
const VerticalTextFlow = () => {
  const prompt = "masterpiece, best quality, professional photography, cinematic lighting, 8k, RAW photo, detailed skin, sharp focus, depth of field, bokeh, award-winning, color graded, high dynamic range, perfect composition, rule of thirds, golden hour, natural light, studio lighting, portrait, landscape, urban, nature, abstract, surreal, minimalist, documentary, street photography, fashion, product, food, architecture, interior, wildlife, macro, black and white, color, creative, artistic, conceptual, narrative, storytelling";

  return (
    <div className="vertical-text-flow">
      <div style={{ animation: 'scrollUp 60s linear infinite' }}>
        {prompt.split(', ').map((word, index) => (
          <span key={index} style={{ display: 'block', margin: '8px 0' }}>
            {word}
          </span>
        ))}
        {/* Repeat the prompt to create seamless loop */}
        {prompt.split(', ').map((word, index) => (
          <span key={`repeat-${index}`} style={{ display: 'block', margin: '8px 0' }}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'experience', 'about'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative selection:bg-neo-yellow selection:text-neo-black">
      <CustomCursor />
      
      {/* Fine grid texture */}
      <div className="fixed inset-0 fine-grid pointer-events-none" style={{ zIndex: -1 }} />
      
      {/* Crosshair grid background */}
      <div className="fixed inset-0 crosshair-grid pointer-events-none" style={{ zIndex: -1 }} />
      
      {/* Scattered parameters */}
      <BackgroundParams />
      
      {/* Grid coordinates */}
      <GridCoordinates />
      
      {/* Vertical text flow */}
      <VerticalTextFlow />
      
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <Hero />
        <Experience />
        <Portfolio />
        <About />
      </main>

      <footer className="py-20 px-4 text-center border-t border-slate-100">
        <p className="text-[10px] uppercase tracking-[0.5em] text-slate-400">
          © 2026 镜头之下 · 个人摄影作品集 · MADE WITH PASSION
        </p>
      </footer>

      {/* Background noise/grain effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
