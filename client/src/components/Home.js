import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ProfileImg from '../profile.jpg';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] -z-10 animate-pulse-slow delay-1000"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-accent font-mono text-lg tracking-wide">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight">
            Dharaneesh<span className="text-accent">.</span>
          </h1>
          <div className="text-2xl md:text-4xl font-bold text-subtext h-20 md:h-16">
            I am a{' '}
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'UI/UX Designer',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-neon-purple"
              repeat={Infinity}
            />
          </div>
          <p className="text-subtext text-lg max-w-xl leading-relaxed">
            I build exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at the intersection of design and engineering.
          </p>

          <div className="flex items-center space-x-6 pt-4">
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-accent text-accent rounded-md font-mono hover:bg-accent/10 transition-colors duration-300"
              >
                Check out my work!
              </motion.button>
            </Link>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-subtext hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-subtext hover:text-accent hover:-translate-y-1 transition-all duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-subtext hover:text-neon-purple hover:-translate-y-1 transition-all duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end relative"
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500} className="relative z-10">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-glass-border shadow-neon group">
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500"></div>
              <img
                src={ProfileImg}
                alt="Dharaneesh"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border-2 border-accent/30 rounded-2xl -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          </Tilt>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float"
      >
        <span className="text-xs font-mono text-subtext mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-subtext rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;