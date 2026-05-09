import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 40 });
  
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest('a, button, .cursor-pointer'));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 4 : 1,
          backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.4)' : '#8b5cf6',
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[100] mix-blend-difference"
      />
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.5 : 0,
          opacity: isHovered ? 1 : 0
        }}
        className="fixed top-0 left-0 w-12 h-12 border border-primary/50 rounded-full pointer-events-none z-[100]"
      />
    </>
  );
};

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[11px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Ben Savio. Engineering for the future.
          </p>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/40">
            <a href="https://github.com/Ben2221" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/ben-savio-6032a2290/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://x.com/Savvy2221" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
