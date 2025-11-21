import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../profile.jpg';

export default function About() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-neon-purple rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-glass-border">
              <img
                src={myPhoto}
                alt="About Me"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold font-heading text-white">
              About <span className="text-accent">Me</span>
            </h2>

            <div className="space-y-4 text-subtext text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-semibold">Dharaneesh</span>, a passionate Full Stack Developer based in India. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
              </p>
              <p>
                My journey in web development started with a curiosity about how things work on the web, which has now evolved into a career where I build scalable and performant applications using the <span className="text-accent">MERN Stack</span> and <span className="text-accent">Flutter</span>.
              </p>
              <p>
                I'm a firm believer in continuous learning and always strive to stay updated with the latest industry trends. When I'm not coding, you can find me exploring new technologies, gaming, or reading tech blogs.
              </p>
            </div>

            <div className="pt-6 flex gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white">10+</h3>
                <p className="text-sm text-subtext uppercase tracking-wider mt-1">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">1+</h3>
                <p className="text-sm text-subtext uppercase tracking-wider mt-1">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}