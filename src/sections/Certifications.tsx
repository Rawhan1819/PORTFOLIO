import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const certificationsData = [
  {
    title: 'PowerBI Workshop',
    issuer: 'OfficeMaster',
    date: 'Oct 2025',
  },
  {
    title: 'HacXLerate 2025 National Hackathon',
    issuer: 'byteXL — Qualified Round 2',
    date: 'Oct 2025',
  },
  {
    title: 'Principles of Management',
    issuer: 'NPTEL (IIT Roorkee)',
    date: 'Jan – Apr 2025',
  },
  {
    title: 'Learning Analytics Tools',
    issuer: 'NPTEL (IIT Roorkee)',
    date: 'Jul – Oct 2025',
  },
];

const Certifications = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-28 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b19] to-ocean-dark" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-straw/80 font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block">
            Battle Trophies
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black">
            Certifications &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-straw to-gold">
              Achievements
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 flex items-start gap-4 group hover:box-glow-gold transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                <Award size={22} />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2 font-bold">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
