import React, { useEffect, useState } from 'react';
import { fetchGithubActivity } from '../api';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFreeCodeCamp, FaCodeBranch } from 'react-icons/fa';

const contributions = [
  {
    org: 'The Eye Org',
    role: 'Contributor',
    link: 'https://github.com/the-eye-org'
  },
  {
    org: 'EVOLV-HYB',
    role: 'Contributor',
    link: 'https://github.com/EVOLV-HYB'
  },
  {
    org: 'OpenCode IIITA',
    role: 'Contributor',
    link: 'https://github.com/opencodeiiita'
  },
  {
    org: 'freeCodeCamp',
    role: 'Contributor',
    icon: <FaFreeCodeCamp className="text-3xl" />,
    link: 'https://github.com/freeCodeCamp'
  }
];

const projects = [
  {
    title: 'LoveGhost-n8n - AI Automation',
    description: 'A fully automated n8n workflow that generates unique, heartwarming daily messages for your grandma using OpenAI and sends them via email. This project combines AI, automation, and personal care — making grandma feel loved every single day! ❤️',
    tech: ['n8n', 'OpenAI', 'Automation', 'JSON', 'SMTP'],
    github: 'https://github.com/Dharaneeshsl/LoveGhost-n8n',
    demo: ''
  },
  {
    title: 'SentinelCharge-n8n - Battery Guardian',
    description: 'A local-first laptop safety automation that monitors battery status, kills heavy apps during low battery events, sends mobile alerts, and logs everything for analysis. Powered by Node.js + n8n to ensure your workspace remains safe and efficient.',
    tech: ['n8n', 'Node.js', 'Automation', 'System Design', 'Webhooks'],
    github: 'https://github.com/Dharaneeshsl/SentinelCharge-n8n',
    demo: ''
  },
  {
    title: 'Educational Keylogger - Cybersecurity',
    description: 'A Python-based keylogger demonstration designed solely for educational purposes and ethical hacking awareness. This project helps cybersecurity enthusiasts understand the mechanics of keystroke logging, system monitoring, and potential vulnerability vectors.',
    tech: ['Python', 'Cybersecurity', 'Ethical Hacking', 'System Monitoring'],
    github: 'https://github.com/Dharaneeshsl/KEYLOGGER-DEMONSTRATION',
    demo: ''
  },
  {
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce website built with React, Node.js, Express, and MongoDB. Features include user authentication, product management, shopping cart, payment processing, and order management. The UI is modern, responsive, and mobile-friendly, with secure checkout and order tracking.',
    tech: ['React', 'React Router', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/Dharaneeshsl/Ecommerce-site',
    demo: 'https://ecommerce-site-omega-gules.vercel.app/'
  },
  {
    title: "Dharaneesh's Delivery Company",
    description: "A modern, full-stack delivery management application with a Flutter frontend and Node.js backend. Features include real-time delivery tracking, Google Maps integration, push notifications, multi-role user management (Customer, Driver, Admin), secure authentication, and comprehensive delivery analytics. Supports iOS, Android, and Web.",
    tech: ['Flutter', 'Dart', 'Node.js', 'Express', 'Google Maps API', 'Firebase', 'Cloudinary', 'MongoDB'],
    github: 'https://github.com/Dharaneeshsl/Dharaneesh-s-Delivery-Company',
    demo: ''
  },
  {
    title: 'Event Management - Eventify',
    description: 'A comprehensive event management platform enabling users to create, manage, and participate in events. Features include event creation, registration, ticketing, real-time updates, notifications, and an intuitive dashboard for organizers and attendees. Built with a modern tech stack for scalability and user experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'JWT', 'Cloudinary'],
    github: 'https://github.com/Dharaneeshsl/EVENT-MANAGEMENT-EVENTIFY',
    demo: ''
  },
  {
    title: 'TIN DOG - Dog Dating Application',
    description: 'A complete full-stack dog dating application built with HTML, CSS, and JavaScript. Simulates a Tinder-like experience for dogs to find their perfect match! Features include user authentication, dog profile management, swipe interface, matches dashboard, messaging system, and a modern responsive design.',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap 5', 'Font Awesome', 'Local Storage'],
    github: 'https://github.com/Dharaneeshsl/TIN-DOG-PROJECT',
    demo: ''
  },
  {
    title: 'Responsive Resume',
    description: 'A clean and modern responsive resume website built with HTML and CSS. Showcases professional experience, education, and skills in a visually appealing and mobile-friendly layout. Easy to customize and deploy for personal branding.',
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    github: 'https://github.com/Dharaneeshsl/Responsive-Resume',
    demo: ''
  },
  {
    title: 'Hotel Menu Page',
    description: 'A simple and visually appealing hotel menu page for customers, built with HTML, CSS, and JavaScript. Allows users to browse menu items in a clean, responsive layout. Easy to customize for any restaurant or cafe.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/Dharaneeshsl/HOTEL-MENU-PAGE',
    demo: ''
  },
  {
    title: 'Restaurant Website',
    description: 'A simple and elegant restaurant website built with HTML and CSS. Features a clean menu layout, attractive design, and responsive structure for a seamless user experience on any device.',
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    github: 'https://github.com/Dharaneeshsl/RESTAURANT',
    demo: ''
  },
  {
    title: 'Snake Game',
    description: 'A classic Snake game implemented in Python. Features smooth gameplay, increasing difficulty, and a simple user interface. Great for learning game logic and Python basics.',
    tech: ['Python'],
    github: 'https://github.com/Dharaneeshsl/SNAKE-GAME',
    demo: ''
  },
  {
    title: 'Simple E-Commerce for Local Brand',
    description: 'A lightweight e-commerce platform designed for local brands. Built with JavaScript, HTML, and CSS, it offers essential features for product listing, shopping cart, and order management. Easy to customize and deploy for small businesses.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/Dharaneeshsl/Simple-E-Commerce-for-local-Brand',
    demo: ''
  },
  {
    title: 'Dice Game',
    description: 'A fun and interactive dice game built with HTML, CSS, and JavaScript. Features a simple UI, random dice rolls, and engaging gameplay for all ages.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Dharaneeshsl/DICE-GAME',
    demo: ''
  },
  {
    title: 'My First Portfolio',
    description: 'A simple personal portfolio website built with HTML. Includes sections for contact, hobbies, and a showcase of personal projects. Great for beginners to learn the basics of web development and personal branding.',
    tech: ['HTML5'],
    github: 'https://github.com/Dharaneeshsl/MY-FIRST-PORTFOLIO',
    demo: ''
  },
  {
    title: 'CRUD Application',
    description: 'A basic CRUD (Create, Read, Update, Delete) application demonstrating fundamental operations for managing data. Built for learning and practicing essential web development concepts.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/Dharaneeshsl/CRUD',
    demo: ''
  },
  {
    title: 'Modern Blog Project',
    description: 'A beautiful, responsive, and feature-rich blog application built with HTML5, CSS3, and JavaScript. Features include dynamic content, search functionality, user authentication, category system, and a modern UI/UX with smooth animations.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Dharaneeshsl/BLOG-PROJECT',
    demo: ''
  }
];

const GITHUB_USERNAME = 'Dharaneeshsl';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Projects() {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchGithubActivity(GITHUB_USERNAME)
      .then(data => setActivity(data.slice(0, 5)))
      .catch(() => setError('Could not load GitHub activity.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 bg-transparent relative z-10" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-accent">Projects</span></h2>
          <p className="text-subtext max-w-2xl mx-auto">Explore some of my recent work, ranging from full-stack web applications to interactive games.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_0_30px_rgba(0,255,231,0.15)]"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm line-clamp-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-white/5 border border-white/10 text-xs text-gray-300 px-3 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 pb-8 pt-4 border-t border-white/5 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-accent font-semibold transition-colors text-sm"
                >
                  <FaGithub className="text-lg" /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-accent font-semibold transition-colors text-sm"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Source Contributions */}
        <div className="mt-24 mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3"
          >
            <FaCodeBranch className="text-accent" /> Open Source Contributions
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {contributions.map((org, index) => (
              <motion.a
                key={org.org}
                href={org.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-accent/40 hover:bg-white/5 transition-all duration-300"
              >
                <div className="text-accent text-3xl group-hover:scale-110 transition-transform duration-300">
                  {org.icon || <FaGithub />}
                </div>
                <div className="text-center">
                  <h4 className="text-white font-bold group-hover:text-accent transition-colors">{org.org}</h4>
                  <p className="text-gray-500 text-sm mt-1">{org.role}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* GitHub Activity Section */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3"
          >
            <FaGithub className="text-accent" /> Recent Activity
          </motion.h3>

          <div className="max-w-3xl mx-auto space-y-4">
            {loading && (
              <div className="space-y-4 animate-pulse">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/5 h-20 rounded-xl"></div>
                ))}
              </div>
            )}

            {error && <div className="text-red-400 text-center bg-red-400/10 py-4 rounded-xl">{error}</div>}

            {!loading && activity.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/40 border border-white/5 rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-accent font-medium">{event.type.replace('Event', '')}</span>
                  <span className="text-gray-500 text-sm">on</span>
                  <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors font-mono text-sm">
                    {event.repo.name}
                  </a>
                </div>
                <span className="text-gray-500 text-xs hidden sm:block">
                  {new Date(event.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}