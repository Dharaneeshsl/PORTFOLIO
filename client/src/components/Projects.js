import React, { useEffect, useState } from 'react';
import { fetchGithubActivity } from '../api';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce website built with React, Node.js, Express, and MongoDB. Features include user authentication, product management, shopping cart, payment processing, and order management.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/Dharaneeshsl/Ecommerce-site',
    demo: 'https://ecommerce-site-omega-gules.vercel.app/'
  },
  {
    title: "Dharaneesh's Delivery",
    description: "A modern delivery management app with Flutter and Node.js. Real-time tracking, Google Maps, push notifications, and multi-role user management.",
    tech: ['Flutter', 'Node.js', 'Google Maps', 'Firebase', 'MongoDB'],
    github: 'https://github.com/Dharaneeshsl/Dharaneesh-s-Delivery-Company',
    demo: ''
  },
  {
    title: 'Eventify',
    description: 'Comprehensive event management platform. Create, register, and manage events with real-time updates and an intuitive dashboard.',
    tech: ['React', 'Node.js', 'Socket.io', 'Redux', 'JWT'],
    github: 'https://github.com/Dharaneeshsl/EVENT-MANAGEMENT-EVENTIFY',
    demo: ''
  },
  {
    title: 'TIN DOG',
    description: 'A Tinder-like experience for dogs! Full-stack dating app with swipe interface, matching system, and messaging.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Dharaneeshsl/TIN-DOG-PROJECT',
    demo: ''
  },
  {
    title: 'Responsive Resume',
    description: 'Clean and modern responsive resume website. Showcases professional experience and skills in a mobile-friendly layout.',
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    github: 'https://github.com/Dharaneeshsl/Responsive-Resume',
    demo: ''
  },
  {
    title: 'Hotel Menu Page',
    description: 'Visually appealing digital menu for restaurants. Browse items in a clean, responsive layout.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Dharaneeshsl/HOTEL-MENU-PAGE',
    demo: ''
  },
  {
    title: 'Snake Game',
    description: 'Classic Snake game in Python. Smooth gameplay and increasing difficulty.',
    tech: ['Python'],
    github: 'https://github.com/Dharaneeshsl/SNAKE-GAME',
    demo: ''
  },
  {
    title: 'Simple E-Commerce',
    description: 'Lightweight e-commerce platform for local brands. Essential features for product listing and order management.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/Dharaneeshsl/Simple-E-Commerce-for-local-Brand',
    demo: ''
  },
  {
    title: 'Dice Game',
    description: 'Interactive dice game with random rolls and engaging gameplay.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Dharaneeshsl/DICE-GAME',
    demo: ''
  },
  {
    title: 'Modern Blog',
    description: 'Feature-rich blog application with dynamic content, search, and user authentication.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Dharaneeshsl/BLOG-PROJECT',
    demo: ''
  }
];

const GITHUB_USERNAME = 'Dharaneeshsl';

export default function Projects() {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchGithubActivity(GITHUB_USERNAME)
      .then(data => {
        if (Array.isArray(data)) {
          setActivity(data.slice(0, 5));
        } else {
          setActivity([]);
        }
      })
      .catch(() => setActivity([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-subtext text-lg max-w-2xl mx-auto">
            A collection of my recent work, ranging from full-stack applications to creative experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 flex flex-col justify-between group hover:shadow-neon transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                    <FaCode size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-subtext hover:text-white transition-colors">
                      <FaGithub size={22} />
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-subtext hover:text-accent transition-colors">
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-subtext text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-accent/80 bg-accent/5 px-2 py-1 rounded border border-accent/10">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Activity */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-heading">
            Recent <span className="text-neon-purple">Activity</span>
          </h3>

          <div className="max-w-3xl mx-auto space-y-4">
            {loading ? (
              <div className="text-center text-subtext">Loading activity...</div>
            ) : (
              activity.map((event, i) => (
                <motion.div
                  key={event.id || i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-glass-bg border border-glass-border rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-neon-purple">
                      <FaGithub />
                    </div>
                    <div>
                      <span className="text-white font-medium">
                        {event.type?.replace('Event', '') || 'Contribution'}
                      </span>
                      <span className="text-subtext mx-2">in</span>
                      <a href={`https://github.com/${event.repo?.name}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        {event.repo?.name}
                      </a>
                    </div>
                  </div>
                  <span className="text-xs text-subtext font-mono">
                    {event.created_at ? new Date(event.created_at).toLocaleDateString() : ''}
                  </span>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}