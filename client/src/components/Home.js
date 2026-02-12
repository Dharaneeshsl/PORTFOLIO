import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen pt-16 text-center select-none relative z-10 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >


      <motion.h3 variants={itemVariants} className="text-xl md:text-2xl font-medium text-gray-300 mb-2">
        Hello, I'm
      </motion.h3>

      <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
        Dharaneesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">S L</span>
      </motion.h1>

      <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-gray-400 mb-8 max-w-3xl">
        Full Stack Developer <span className="text-accent">|</span> UI/UX Designer <span className="text-accent">|</span> AI & ML Enthusiast
      </motion.h2>

      <motion.p variants={itemVariants} className="text-lg md:text-xl text-subtext max-w-2xl mx-auto leading-relaxed mb-10">
        Merging creative <span className="text-white font-semibold">UI/UX Design</span> with robust <span className="text-white font-semibold">Full Stack Development</span> and cutting-edge <span className="text-white font-semibold">AI & ML</span> solutions. Building the future of intelligent web experiences.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
        <a
          href="#projects"
          className="bg-accent text-background px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(0,255,231,0.4)] hover:shadow-[0_0_40px_rgba(0,255,231,0.6)] hover:bg-white hover:scale-105 transition-all duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-accent text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(0,255,231,0.2)] hover:scale-105 transition-all duration-300 backdrop-blur-sm"
        >
          Let's Talk
        </a>
      </motion.div>
    </motion.div>
  );
}