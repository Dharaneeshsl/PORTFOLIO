import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaShieldAlt, FaUsers } from 'react-icons/fa';

const leadershipItems = [
  {
    icon: <FaCloud />,
    title: 'Technical Lead',
    group: 'AWS Cloud Program',
    description: 'Led cloud initiatives and guided peers in AWS technologies and project implementation.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Technical Member',
    group: 'The EYE - Cybersecurity Club',
    description: 'Contributed to cybersecurity activities and collaborative technical projects.',
  },
  {
    icon: <FaUsers />,
    title: 'Technical Member',
    group: 'CSEA',
    description: 'Contributed in technical events, development activities, and peer collaboration.',
  },
];

export default function Leadership() {
  return (
    <section className="py-24 bg-transparent relative z-10" id="leadership">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership & Clubs</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${item.group}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:border-accent/40 hover:bg-white/5 transition-all duration-300"
            >
              <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors mb-2">{item.title}</h3>
              <p className="text-gray-300 font-medium mb-4">{item.group}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
