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
    id: 1,
    title: "neXus — Complete CTF Platform",
    description: "End-to-end Capture-The-Flag platform built for INFINITUM 2026, EYE Club PSG TECH. Features OTP-based authentication, multi-round competitive event flow, real-time code execution against test cases, and puzzle-based challenges across 3 rounds.",
    badge: "Built for INFINITUM 2026 • EYE Club, PSG TECH",
    techStack: ["React", "Node.js", "Express", "MongoDB", "OTP Auth", "Real-time Code Execution"],
    github: "https://github.com/Dharaneeshsl",
    live: "",
  },
  {
    id: 2,
    title: "Live Satellite Communication Globe",
    description: "Real-time 3D simulator of a satellite network using live TLE data. Implemented orbit propagation, WebSocket streaming, and latency-based link visualization for scalable real-time systems.",
    badge: "Real-time • 3D • WebSocket",
    techStack: ["React", "FastAPI", "WebSocket", "TLE Data", "Three.js", "Python"],
    github: "https://github.com/Dharaneeshsl",
    live: "",
  },
  {
    id: 3,
    title: "PhishX — Real-Time Phishing Detection",
    description: "ML-powered system to classify phishing URLs, emails, and webpage content. Deployed as a Manifest V3 Chrome Extension for real-time browser-level threat prevention.",
    badge: "Chrome Extension • Manifest V3 • ML",
    techStack: ["Python", "Machine Learning", "Chrome Extension API", "Manifest V3", "Flask"],
    github: "https://github.com/Dharaneeshsl",
    live: "",
  },
  {
    id: 4,
    title: "DebugIQ — AI-Assisted Log Analysis Platform",
    description: "End-to-end log intelligence platform that ingests raw simulation logs, extracts failures with context, deduplicates repeated issues, clusters related failures, and ranks them by severity and module impact for fast triage.",
    badge: "AI • Log Intelligence • Clustering",
    techStack: ["Python", "AI/ML", "Log Processing", "Clustering", "Severity Ranking"],
    github: "https://github.com/Dharaneeshsl",
    live: "",
  },
  {
    id: 5,
    title: "LoveGhost-n8n — AI Automation",
    description: "A fully automated n8n workflow that generates unique, heartwarming daily messages for your grandma using OpenAI. The project combines AI, automation, and JSON to automate everything.",
    badge: "AI • Automation • n8n",
    techStack: ["n8n", "OpenAI", "Automation", "JSON"],
    github: "https://github.com/Dharaneeshsl",
    live: "",
  },
  {
    id: 6,
    title: "SentinelCharge-n8n — Battery Guardian",
    description: "An n8n automation that monitors battery status, triggers alerts during charging, and logs everything for analysis. Powered by automated workflows and system design.",
    badge: "n8n • Automation • System Design",
    techStack: ["n8n", "Automation", "System Design", "Webhooks"],
    github: "https://github.com/Dharaneeshsl",
    live: "",
  },
  {
    id: 7,
    title: "Educational Keylogger — Cybersecurity",
    description: "A Python-based educational keylogger demonstration designed for educational purposes and cybersecurity awareness. Helps cybersecurity enthusiasts understand threat vectors and ethical hacking fundamentals.",
    badge: "Cybersecurity • Ethical Hacking • Python",
    techStack: ["Python", "Cybersecurity", "System Monitoring", "Ethical Hacking"],
    github: "https://github.com/Dharaneeshsl",
    live: "",
  },
  {
    id: 8,
    title: "CSEA Event Portal — Stranger Things Themed",
    description: "Multi-round competitive event platform built for PSG Tech's CS association. Features OTP auth, real-time code execution with test cases, and puzzle-based challenges across 3 rounds.",
    badge: "PSG Tech • CSEA • Real Event",
    techStack: ["React", "Node.js", "Express", "MongoDB", "OTP Auth"],
    github: "https://github.com/Dharaneeshsl",
    live: "",
  },
  {
    id: 9,
    title: "E-Commerce Website",
    description: "A fully automated site workflow with React, Firebase, Express, and MongoDB. Features include authentication, product management, shopping cart, payment integration, and admin dashboard.",
    badge: "Full Stack • MERN",
    techStack: ["React", "Node.js", "Firebase", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Dharaneeshsl",
    live: "",
  },
  {
    id: 10,
    title: "Dharaneesh's Delivery Company",
    description: "A modern full-stack delivery management platform using Flutter and Node.js. Features real-time tracking, Google Maps API integration, Firebase integration, push notifications, and order management.",
    badge: "Full Stack • Maps API • Real-time",
    techStack: ["Google Maps API", "Flutter", "Node.js", "Express", "Firebase", "MongoDB"],
    github: "https://github.com/Dharaneeshsl",
    live: "",
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
                  {project.badge && (
                    <span className="bg-white/5 border border-white/10 text-xs text-gray-300 px-3 py-1 rounded-full font-medium">
                      {project.badge}
                    </span>
                  )}
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-white/5 border border-white/10 text-xs text-gray-300 px-3 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 pb-8 pt-4 border-t border-white/5 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-accent font-semibold transition-colors text-sm"
                  >
                    <FaGithub className="text-lg" /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
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
