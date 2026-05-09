import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const MouseFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full pointer-events-none z-0"
      />
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        className="fixed top-0 left-0 w-[300px] h-[300px] bg-accent/10 blur-[80px] rounded-full pointer-events-none z-0"
      />
    </>
  );
};

function App() {
  return (
    <div className="app">
      <MouseFollower />
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
