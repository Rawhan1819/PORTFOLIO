import { motion } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep ocean gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#0a1628] to-[#070d1f]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-orange-600/5 rounded-full blur-[80px]" />
      </div>

      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-20">
        {/* Wanted Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <span className="text-yellow-500 font-black tracking-[0.3em] uppercase text-xs md:text-sm border-2 border-yellow-500/60 px-6 py-2 rounded-full bg-yellow-500/5 inline-block">
            ☠ Wanted ☠
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-2 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-white text-glow">Rawhan</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500">
            Ramzi
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-xl text-white/50 mb-4 font-bold tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Full Stack Developer &bull; AI Explorer
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-sans leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Computer Science undergrad sailing the Grand Line of tech — building scalable web apps with the
          <strong className="text-white"> MERN stack</strong>, conquering data with
          <strong className="text-white"> ML</strong>, and chasing the One Piece of clean, impactful code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-black rounded-xl shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] hover:-translate-y-1 transition-all uppercase tracking-wider text-sm"
          >
            Explore My Voyages
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-wider text-sm border border-white/20"
          >
            Send a Den Den Mushi
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a href="https://www.github.com/Rawhan1819" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-yellow-500 transition-all">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/rawhan-ramzi-mohammed-449ab5291" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-blue-400 transition-all">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:rawhanramzi@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-orange-500 transition-all">
            <Mail size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
