import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

const skillCategories = [
  {
    title: '⚔️ Santoryu — Programming',
    description: 'The three-sword style of code',
    skills: ['Python', 'Java', 'JavaScript', 'C'],
    border: 'border-t-pirate-red',
  },
  {
    title: '🧭 Navigation — Core',
    description: 'Charting the course through logic',
    skills: ['DSA', 'OOP', 'DBMS', 'System Design', 'REST APIs'],
    border: 'border-t-gold',
  },
  {
    title: '🚢 Shipwright — Web Dev',
    description: 'Building the Thousand Sunny of apps',
    skills: ['MERN Stack', 'HTML', 'CSS', 'React', 'Node.js', 'Express'],
    border: 'border-t-ocean-light',
  },
  {
    title: '🔮 Devil Fruit — Database',
    description: 'Harnessing the power of data',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    border: 'border-t-sunset',
  },
  {
    title: '🗡️ Haki — Tools',
    description: 'Weapons of a true swordsman',
    skills: ['Git', 'GitHub', 'VS Code', 'Responsive UI', 'CN'],
    border: 'border-t-straw',
  },
];

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-28 bg-[#060b19] relative" ref={containerRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ocean/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ocean-sky/80 font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block">
            Battle Arsenal
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-light to-ocean-sky text-glow-blue">
              Arsenal
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`glass p-6 rounded-2xl relative overflow-hidden group hover:box-glow transition-all duration-500 transform hover:-translate-y-2 border-t-4 ${category.border}`}
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-gold/10 transition-all duration-700" />

              <h3 className="text-lg font-black mb-1 text-white font-display relative z-10">
                {category.title}
              </h3>
              <p className="text-xs text-gray-500 mb-5 relative z-10">{category.description}</p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:border-gold/50 hover:bg-gold/5 transition-all text-sm font-semibold tracking-wide cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
