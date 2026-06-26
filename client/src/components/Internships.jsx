import React from 'react';
import { motion } from 'framer-motion';

const internships = [
  {
    title: 'SkillCraft',
    role: 'ML Intern',
    location: 'Remote',
    date: 'Jul 2025 - Aug 2025',
    description: 'Task-based ML internship. Built real-world models independently. Applied linear regression, K-means, KNN.',
    tech: ['Python', 'scikit-learn', 'pandas', 'KNN', 'K-means'],
  },
  {
    title: 'Corizo',
    role: 'Web Dev Intern',
    location: 'Remote',
    date: 'Jun 2025 - Aug 2025',
    description: 'Built responsive web apps. Developed and deployed a full E-Commerce website using GitHub and Vercel.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'Express'],
  },
  {
    title: 'Edunet Foundation (AICTE)',
    role: 'AI & ML Intern',
    location: 'Remote',
    date: 'Jun 2025 - Jul 2025',
    description: 'Completed 6-week internship on AI/ML concepts and implementation.',
    tech: ['Python', 'Machine Learning', 'AI'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Internships() {
  return (
    <section className="py-24 bg-transparent relative z-10" id="internships">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Internships</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,255,231,0.15)]"
            >
              <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors mb-2">
                {internship.title} <span className="text-accent">·</span> {internship.role} <span className="text-accent">·</span> {internship.location}
              </h3>
              <p className="text-gray-500 text-sm font-medium mb-5">{internship.date}</p>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">{internship.description}</p>
              <div className="flex flex-wrap gap-2">
                {internship.tech.map((item) => (
                  <span key={item} className="bg-white/5 border border-white/10 text-xs text-gray-300 px-3 py-1 rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
