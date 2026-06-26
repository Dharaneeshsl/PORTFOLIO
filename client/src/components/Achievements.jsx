import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaTrophy } from 'react-icons/fa';

const certifications = [
  {
    border: '#0f62fe',
    badge: 'IBM',
    issuer: 'IBM',
    title: 'Python for Data Science AI & Development',
  },
  {
    border: '#ff9900',
    badge: 'AWS',
    issuer: 'AWS',
    title: 'Fundamentals of AI and Machine Learning',
  },
  {
    border: '#a435f0',
    badge: 'U',
    issuer: 'Udemy',
    title: 'Complete Full Stack Web Development Bootcamp',
  },
  {
    border: '#00bceb',
    badge: 'C',
    issuer: 'Cisco',
    title: 'Javascript Essentials',
  },
  {
    border: '#03ef62',
    badge: 'DC',
    issuer: 'DataCamp',
    title: 'Docker',
  },
];

const awards = [
  ['Naukri Campus Young Turks 2025', 'Top Scorer'],
  ["OpenCode'25 - IITA", 'Overall Rank 62 (Open Source)'],
];

const hackathons = [
  ['Adobe India Hackathon', 'Participant'],
  ['Chennai Hackfest 2026 (GDG)', 'Participant'],
  ['Bharatiya Antariksh - ISRO', 'Participant'],
  ['SIH 2025 Internal Hackathon', 'Selected'],
  ['ET Gen AI Hackathon', 'Participant'],
  ['Code the Future: AI Edition', 'Participant'],
  ['Mock Hackathon - VIT', 'Participant'],
  ['National Space Hackathon - IITD', 'Participant'],
  ["OpenCode'25 - IITA", 'Participant'],
  ['Impulse 2026 - NITK', 'Participant'],
  ['TATA Crucible Campus Quiz 2025', 'Participant'],
];

export default function Achievements() {
  return (
    <section className="py-24 bg-transparent relative z-10" id="achievements">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements & Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={`${cert.issuer}-${cert.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-xl p-5 hover:bg-white/5 transition-all duration-300"
              style={{ borderLeft: `4px solid ${cert.border}` }}
            >
              <span className="inline-flex items-center justify-center min-w-10 h-8 px-2 rounded-full bg-white/10 text-white text-xs font-bold mb-4">
                {cert.badge}
              </span>
              <h3 className="text-white font-bold mb-2">{cert.issuer}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cert.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <FaTrophy className="text-accent" /> Awards
          </h3>
          <div className="space-y-4">
            {awards.map(([name, result]) => (
              <div key={name} className="bg-black/40 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-white font-medium">{name}</span>
                <span className="text-accent font-semibold">{result}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Hackathons</h3>
          <div className="border-l-2 border-blue-500 pl-6 space-y-4">
            {hackathons.map(([name, result]) => (
              <div key={name} className="relative bg-black/40 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="absolute -left-[33px] top-4 text-accent">
                  <FaBolt />
                </span>
                <span className="text-white font-medium">{name}</span>
                <span className="text-gray-400 font-semibold">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
