import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Anchor, Calendar } from 'lucide-react';

const Experience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-28 relative overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b19] to-ocean-dark" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sunset/80 font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block">
            Voyage Log
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black">
            Battle{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset to-gold">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-sunset to-transparent" />

          {/* Experience Card */}
          <div className="relative pl-20 md:pl-28 pb-4">
            {/* Timeline dot */}
            <div className="absolute left-[22px] md:left-[38px] top-2 w-5 h-5 rounded-full bg-gold shadow-[0_0_15px_rgba(234,179,8,0.5)] border-2 border-ocean-dark z-10" />

            <div className="glass rounded-2xl p-8 hover:box-glow-gold transition-all duration-500 group">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-black font-display text-white group-hover:text-gold transition-colors">
                    Full Stack Developer Intern
                  </h3>
                  <p className="text-gold/80 font-bold mt-1">
                    Codec Technologies Pvt. Ltd.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0 font-bold">
                  <Calendar size={14} />
                  <span>Jan 2026 — Feb 2026</span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Anchor size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">
                    Developed and deployed full-stack web modules using the{' '}
                    <strong className="text-white">MERN stack</strong>, improving application
                    responsiveness by <strong className="text-gold">25%</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Anchor size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">
                    Built and integrated{' '}
                    <strong className="text-white">RESTful APIs</strong>, ensuring efficient
                    frontend-backend communication.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Anchor size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">
                    Collaborated in a team environment using{' '}
                    <strong className="text-white">Git workflows</strong>, reducing code conflicts
                    and improving development efficiency.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
