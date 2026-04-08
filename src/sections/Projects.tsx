import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'WebScout-AI',
    subtitle: '— The All Blue of Automation',
    description:
      'Built an AI-powered automation platform for multi-step task execution. Processed 1000+ data points/session using scalable pipelines. Reduced backend latency by 30% using Flask and Node.js.',
    tech: ['Flask', 'Node.js', 'AI/ML', 'Scalable Pipelines'],
    github: 'https://github.com/Rawhan1819/WebScout-AI',
    live: '',
    accent: 'from-ocean-light to-ocean-sky',
    borderColor: 'border-t-ocean-light',
    stats: ['1000+ data pts/session', '30% less latency'],
  },
  {
    title: 'Spam Email Detection',
    subtitle: '— Observation Haki for Emails',
    description:
      'Developed ML model achieving 95%+ accuracy in spam classification. Applied NLP techniques (TF-IDF, tokenization) to improve model performance.',
    tech: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF'],
    github: 'https://github.com/Rawhan1819/Spam-Email-Detection',
    live: '',
    accent: 'from-gold to-straw',
    borderColor: 'border-t-gold',
    stats: ['95%+ accuracy', 'NLP powered'],
  },
  {
    title: 'Skill-Forge',
    subtitle: '— The Baratie of Learning',
    description:
      'Built a full-stack gamified learning platform. Designed backend supporting real-time content delivery and scalability.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gamification'],
    github: 'https://github.com/Rawhan1819/Updated-SkillForge',
    live: '',
    accent: 'from-sunset to-pirate-red',
    borderColor: 'border-t-sunset',
    stats: ['Full-stack', 'Real-time delivery'],
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      className="py-28 relative overflow-hidden bg-[#060b19]"
      ref={containerRef}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ocean/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sunset/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sunset/80 font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block">
            Grand Fleet
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset to-gold">
              Voyages
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`group glass rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:box-glow flex flex-col border-t-4 ${project.borderColor}`}
            >
              {/* Header gradient strip */}
              <div className={`h-2 bg-gradient-to-r ${project.accent}`} />

              <div className="p-7 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-2xl font-black font-display mb-0 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 italic mb-4">{project.subtitle}</p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stats.map((stat, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-gold/10 text-gold border border-gold/20 rounded-full font-bold"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 bg-ocean-light/10 text-ocean-sky font-bold rounded-md border border-ocean-light/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-gold transition-colors font-bold text-white/60"
                  >
                    <Code2 size={16} /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-sunset transition-colors font-bold ml-auto text-white/60"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
