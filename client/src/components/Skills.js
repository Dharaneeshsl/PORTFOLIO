import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaFigma, FaVial } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiPostman, SiGraphql, SiDart, SiFlutter, SiFirebase } from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Dart', icon: <SiDart /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'REST API', icon: <FaVial /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-heading text-white mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-subtext text-lg">
            The technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-8 hover:border-accent/30 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-glass-border pb-2 inline-block">
                {group.category}
              </h3>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                {group.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-subtext group-hover:text-accent group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300 shadow-lg group-hover:shadow-neon">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-subtext font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}