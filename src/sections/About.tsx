import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  useEffect(() => {
    gsap.to('.about-bg-element', {
      y: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="about"
      className="relative py-28 min-h-[80vh] flex items-center overflow-hidden"
      ref={containerRef}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-ocean-dark z-0">
        <div className="about-bg-element absolute -left-32 top-20 w-96 h-96 bg-ocean/8 rounded-full blur-[120px]" />
        <div className="about-bg-element absolute right-0 bottom-0 w-[500px] h-[500px] bg-sunset/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold/80 font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block">
            Captain's Log
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-glow">
            The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-sunset">
              Origins
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Wanted Poster */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -60, rotate: -8 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: -3 } : {}}
            transition={{ duration: 1.2, type: 'spring', bounce: 0.3 }}
          >
            <div className="relative wanted-paper p-8 text-pirate-brown font-display rounded-sm shadow-2xl shadow-black/50 border-[10px] border-pirate-brown/80 hover:rotate-0 transition-transform duration-700 max-w-sm w-full group cursor-default">
              {/* Wanted Header */}
              <h3 className="text-5xl font-black text-center uppercase tracking-[0.2em] mb-1 border-b-4 border-pirate-brown/60 pb-2">
                WANTED
              </h3>
              <p className="text-center text-xs font-black tracking-[0.5em] mb-6 text-pirate-brown/70">
                DEAD OR ALIVE
              </p>

              {/* Photo area */}
              <div className="w-full h-52 bg-[#C4A87A] border-4 border-pirate-brown/50 mb-6 flex flex-col items-center justify-center overflow-hidden relative">
                {/* Zoro silhouette with 3 swords */}
                <svg className="w-32 h-32 text-pirate-brown/60" viewBox="0 0 120 120" fill="currentColor">
                  {/* Head */}
                  <circle cx="60" cy="30" r="16" />
                  {/* Body */}
                  <path d="M45 46 L60 90 L75 46 Z" />
                  {/* 3 Swords (Zoro's Santoryu style) */}
                  <rect x="20" y="38" width="3" height="50" rx="1" transform="rotate(-15 21 38)" />
                  <rect x="58.5" y="10" width="3" height="50" rx="1" />
                  <rect x="97" y="38" width="3" height="50" rx="1" transform="rotate(15 98 38)" />
                  {/* Haramaki (belly band) */}
                  <rect x="48" y="55" width="24" height="8" rx="2" opacity="0.4" />
                </svg>
                <span className="text-[10px] font-bold tracking-widest text-pirate-brown/40 mt-1">
                  PLACE YOUR PHOTO HERE
                </span>
              </div>

              {/* Name */}
              <h4 className="text-3xl font-black text-center mb-1 tracking-wider">
                RAWHAN RAMZI
              </h4>
              <p className="text-center text-sm font-bold mb-3 text-pirate-brown/80">
                a.k.a. "The Code Swordsman"
              </p>

              {/* Bounty */}
              <div className="text-center border-t-2 border-pirate-brown/30 pt-3">
                <p className="text-2xl font-black tracking-wide">
                  ฿ 999,999,999
                </p>
                <p className="text-[10px] font-bold tracking-[0.4em] mt-2 text-pirate-brown/50">
                  WORLD GOVERNMENT
                </p>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Computer Science undergraduate at{' '}
              <strong className="text-white">
                Vignan's Foundation of Science, Technology and Research
              </strong>{' '}
              with a strong expertise in full-stack development, data structures, and machine learning.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Like Zoro with his three swords, I wield the{' '}
              <strong className="text-gold">MERN Stack</strong>,{' '}
              <strong className="text-ocean-sky">Flask</strong>, and{' '}
              <strong className="text-sunset">Python</strong> to build scalable web applications,
              optimize API performance, and develop data-driven systems.
            </p>

            {/* Zoro Quote */}
            <div className="border-l-4 border-gold/60 pl-6 py-3 my-8">
              <p className="italic text-white/70 text-lg">
                "Nothing happened."
              </p>
              <p className="text-gold/60 text-sm mt-1 font-bold">— Roronoa Zoro</p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate about solving real-world problems with efficient and scalable solutions
              aligned with business needs. Always training to become the{' '}
              <span className="text-gold font-bold">World's Greatest Developer</span>.
            </p>

            {/* Education Badge */}
            <div className="glass rounded-xl p-4 flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="font-bold text-white text-sm">B.Tech in Computer Science (Ongoing)</p>
                <p className="text-gray-400 text-sm">VFSTR &bull; SGPA: 8.7</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
