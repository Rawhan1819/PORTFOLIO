import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#020817] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Jolly Roger Skull */}
          <motion.svg
            className="w-24 h-24 text-yellow-500 mb-8"
            viewBox="0 0 64 64"
            fill="currentColor"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            <circle cx="32" cy="24" r="16" />
            <circle cx="25" cy="21" r="4" fill="#020817" />
            <circle cx="39" cy="21" r="4" fill="#020817" />
            <path d="M26 30 Q32 36 38 30" stroke="#020817" strokeWidth="2" fill="none" />
            <rect x="4" y="40" width="56" height="6" rx="3" />
            <rect x="29" y="36" width="6" height="24" rx="3" />
          </motion.svg>

          {/* Loading Text */}
          <motion.div
            className="flex items-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {'SETTING SAIL'.split('').map((char, i) => (
              <motion.span
                key={i}
                className="text-sm font-black tracking-[0.3em] text-yellow-500/80 font-display"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.05 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="mt-6 w-48 h-1 bg-white/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, delay: 0.8, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
