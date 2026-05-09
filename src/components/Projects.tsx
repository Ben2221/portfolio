import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import React, { useRef } from 'react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "HopAlong",
    category: "Full Stack / Geolocation",
    description: "A full-stack carpooling platform for IIIT Kottayam. Features Maps integration, domain-based authentication, and transactional seat allocation.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    link: "https://hopalong.benser.tech",
    github: "https://github.com/Ben2221/HopAlong",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "HexaScan",
    category: "Cybersecurity / Python",
    description: "A modular web vulnerability scanner detecting OWASP Top 10 flaws like SQLi and XSS. Features automated auditing and structured report generation.",
    tech: ["Python", "OWASP Top 10", "Bash", "Security Auditing"],
    github: "https://github.com/Ben2221/HexaScan",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "CollabWrite",
    category: "Productivity / Real-time",
    description: "A high-performance collaborative markdown editor with real-time synchronization and live preview. Built for high-impact developer collaboration.",
    tech: ["Socket.io", "React", "PostgreSQL", "Redis"],
    link: "https://collabwrite.benser.tech",
    github: "https://github.com/Ben2221/CollabWrite",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "AskMeLaw",
    category: "AI / Legal Tech",
    description: "AI-powered legal assistant using RAG for precise document analysis and retrieval, bridging the gap between complex law and clear answers.",
    tech: ["Python", "OpenAI", "Next.js", "Pinecone"],
    github: "https://github.com/Ben2221/askmelaw",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200"
  }
];

const ProjectCard = ({ project, index, targetScale }: { 
  project: Project; 
  index: number; 
  targetScale: number;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        style={{ 
          scale,
          top: `calc(-10% + ${index * 25}px)`
        }}
        className="relative h-[550px] w-full glass rounded-[2.5rem] overflow-hidden group border-white/5"
      >
        <div
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.1), transparent 40%)`
          }}
        />

        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-between">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block"
              >
                {project.category}
              </motion.span>
              <h3 className="text-5xl md:text-6xl font-black tracking-tightest uppercase mb-8">{project.title}</h3>
              <p className="text-text-muted text-lg leading-relaxed mb-10 max-w-md">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[9px] font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-white/5 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-6 mt-12">
              {project.github && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  <GithubIcon size={20} /> Code
                </motion.a>
              )}
              {project.link && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  <ExternalLink size={20} /> Live Demo
                </motion.a>
              )}
            </div>
          </div>

          <div className="md:w-1/2 relative overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative pb-[10vh]">
      <div className="container">
        <div className="min-h-screen flex flex-col justify-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-7xl md:text-[10rem] font-black tracking-tightest uppercase leading-[0.8] mb-12">
              Selected <br /> <span className="text-white/20 italic">Works</span>
            </h2>
            <p className="text-text-muted text-xl max-w-xl leading-relaxed text-balance">
              A curated collection of projects where security meets sophisticated engineering. Scroll down to see them stack.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {projects.map((project, i) => {
            const targetScale = 1 - ((projects.length - i) * 0.05);
            return <ProjectCard key={i} index={i} project={project} targetScale={targetScale} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
