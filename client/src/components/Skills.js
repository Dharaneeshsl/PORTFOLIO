import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaGitAlt, FaFigma, FaVial } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiPostman, SiGraphql, SiVisualstudiocode } from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact className="text-accent" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-accent" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-accent" /> },
      { name: 'JavaScript', icon: <FaJs className="text-accent" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-accent" /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-accent" /> },
      { name: 'Express', icon: <SiExpress className="text-accent" /> },
      { name: 'REST API', icon: <FaVial className="text-accent" /> },
      { name: 'GraphQL', icon: <SiGraphql className="text-accent" /> },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-accent" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-accent" /> },
      { name: 'MySQL', icon: <SiMysql className="text-accent" /> },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-accent" /> },
      { name: 'VS Code', icon: <SiVisualstudiocode className="text-accent" /> },
      { name: 'Figma', icon: <FaFigma className="text-accent" /> },
      { name: 'Postman', icon: <SiPostman className="text-accent" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category} className="bg-black bg-opacity-40 rounded-glass shadow-glass p-6">
              <h3 className="text-xl font-semibold text-accent mb-4">{group.category}</h3>
              <ul className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li key={item.name} className="bg-background border border-accent rounded-full px-4 py-1 text-subtext text-sm font-medium shadow-neon hover:scale-105 transition-transform flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 