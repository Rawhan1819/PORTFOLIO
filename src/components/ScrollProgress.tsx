import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-gold via-sunset to-pirate-red z-50"
      style={{ width }}
    />
  );
};

export default ScrollProgress;
