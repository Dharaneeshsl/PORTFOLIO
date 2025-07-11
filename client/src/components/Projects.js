import React, { useEffect, useState } from 'react';
import { fetchGithubActivity } from '../api';

const projects = [
  {
    title: 'Project One',
    description: 'A modern web app for managing tasks (TODO LIST) efficiently.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Project Two',
    description: 'A beautiful portfolio website with animations.',
    tech: ['React', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  // Add more projects as needed
];

const GITHUB_USERNAME = 'octocat'; // Replace with your GitHub username

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
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-black bg-opacity-40 rounded-glass shadow-neon p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300" data-aos="fade-up">
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">{project.title}</h3>
                <p className="text-subtext mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-background border border-accent rounded-full px-3 py-1 text-xs text-accent font-semibold shadow-glass">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-accent text-black px-4 py-2 rounded-full font-bold shadow-neon hover:bg-white hover:text-accent transition-colors">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-accent text-accent px-4 py-2 rounded-full font-bold hover:bg-accent hover:text-black transition-colors">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
        {/* GitHub Activity Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-accent mb-4 text-center">Recent GitHub Activity</h3>
          {loading && <div className="text-subtext text-center">Loading...</div>}
          {error && <div className="text-red-500 text-center">{error}</div>}
          <ul className="space-y-4">
            {activity.map((event) => (
              <li key={event.id} className="bg-black bg-opacity-30 rounded-glass shadow-glass p-4" data-aos="fade-up">
                <span className="text-white font-semibold">{event.type.replace('Event', '')}</span>{' '}
                <span className="text-subtext">at</span>{' '}
                <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{event.repo.name}</a>
                <span className="text-subtext ml-2">({new Date(event.created_at).toLocaleString()})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 