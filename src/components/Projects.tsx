import { motion, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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
    //link: "https://hopalong.benser.tech",
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
    //link: "https://hopalong.benser.tech",
    github: "https://github.com/Ben2221/askmelaw",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleCardClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass overflow-hidden cursor-pointer"
    >
      <div
        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.15), transparent 40%)`
        }}
      />

      <div className="relative h-[500px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent" />

        <div className="absolute bottom-0 left-0 p-10 w-full">
          <div className="flex justify-between items-end mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">{project.category}</span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tightest uppercase">{project.title}</h3>
            </div>
            <div className="flex gap-4 relative z-20">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-muted hover:text-white transition-all hover:scale-110"
                >
                  <GithubIcon size={20} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-muted hover:text-white transition-all hover:scale-110"
                >
                  <ArrowUpRight size={20} />
                </a>
              )}
            </div>
          </div>

          <p className="text-text-muted text-lg max-w-xl line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.tech.map(t => (
              <span key={t} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-white/40">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container">
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-[7rem] font-black tracking-tightest uppercase mb-12">
              Selected <br /> <span className="text-white/20">Works</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <p className="text-text-muted text-xl max-w-xl leading-relaxed text-balance">
                A collection of digital products that blend innovative engineering with sophisticated aesthetics.
              </p>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-white/10" />
                Scroll to explore
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

