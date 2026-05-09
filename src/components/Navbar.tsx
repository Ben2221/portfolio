import { motion, useScroll, useSpring } from 'framer-motion';
import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="h-[2px] bg-primary origin-left"
        style={{ scaleX }}
      />

      <div className="p-6 flex justify-center">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass px-8 py-3 flex items-center gap-10"
        >
          <div className="text-xs font-black tracking-widest uppercase">
            <a href="#" className="nav-link">
              BenSavio<span className="text-primary">.</span>
            </a>
          </div>

          <div className="hidden md:flex gap-8 border-l border-white/10 pl-8">
            <a href="#projects" className="nav-link">Work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="flex gap-5 items-center pl-8 border-l border-white/10">
            <a href="https://github.com/Ben2221" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
              <GithubIcon size={16} />
            </a>
            <a href="https://linkedin.com/in/ben-savio-6032a2290/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
              <LinkedinIcon size={16} />
            </a>
            <a href="https://x.com/Savvy2221" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
              <XIcon size={16} />
            </a>
            <a href="mailto:bensavio2221@gmail.com" className="text-text-muted hover:text-white transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;


