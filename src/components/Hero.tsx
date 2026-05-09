import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="mesh-bg" />
      <div className="mesh-orb w-[600px] h-[600px] bg-primary -top-20 -left-20" />
      <div className="mesh-orb w-[500px] h-[500px] bg-accent -bottom-20 -right-20" style={{ animationDelay: '-5s' }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass text-[10px] font-bold tracking-[0.2em] uppercase border-white/5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary-glow)] animate-pulse" />
              Cyber Security Specialist & Full Stack Dev
            </motion.div>

            <h1 className="text-[10vw] lg:text-[7rem] font-black mb-10 tracking-tightest leading-[0.85] text-gradient uppercase">
              Ben <br /> <span className="text-white/20">Savio</span><span className="text-primary">.</span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-text-muted mb-14 font-medium leading-relaxed text-balance">
              Computer Science student at IIIT Kottayam
              I build secure, high-performance applications and specialized security tools.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a href="#projects" className="btn-premium w-full sm:w-auto justify-center">
                Explore Work <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-text-muted hover:text-white transition-colors border-b border-white/10 pb-1">
                Start a Conversation
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Background Glow for Image */}
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse" />
            
            <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden glass border-white/10 group shadow-2xl">
              <img
                src="/profilev.jpeg"
                alt="Ben Savio"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 glass rounded-full border-white/10 flex items-center justify-center backdrop-blur-xl"
            >
              <div className="text-[10px] font-black tracking-widest text-primary">SCROLL</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

