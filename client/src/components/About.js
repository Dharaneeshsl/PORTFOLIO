import React from 'react';
import myPhoto from '../assets/dharaneesh-photo.jpg';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 bg-transparent relative z-10" id="about">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <img
              src={myPhoto}
              alt="Dharaneesh S L"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-6 text-white flex items-center justify-center md:justify-start gap-3">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am a passionate <span className="text-white font-semibold">Full Stack Developer</span>, <span className="text-white font-semibold">UI/UX Designer</span>, and <span className="text-white font-semibold">AI & ML Enthusiast</span>.
            I build high-quality, scalable web applications and intuitive digital experiences.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Collaborating with others to create impactful digital experiences is what drives me.
            I'm always open to new opportunities and challenges that push my boundaries.
          </p>
        </motion.div>

      </div>
    </section>
  );
}