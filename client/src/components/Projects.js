import React, { useEffect, useState } from 'react';
import { fetchGithubActivity } from '../api';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce website built with React, Node.js, Express, and MongoDB. Features include user authentication, product management, shopping cart, payment processing, and order management. The UI is modern, responsive, and mobile-friendly, with secure checkout and order tracking.',
    tech: [
      'React',
      'Redux Toolkit',
      'React Router',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Stripe',
      'PayPal'
    ],
    github: 'https://github.com/Dharaneeshsl/Ecommerce-site',
    demo: 'https://ecommerce-site-omega-gules.vercel.app/'
  },
  {
    title: "Dharaneesh's Delivery Company",
    description: "A modern, full-stack delivery management application with a Flutter frontend and Node.js backend. Features include real-time delivery tracking, Google Maps integration, push notifications, multi-role user management (Customer, Driver, Admin), secure authentication, and comprehensive delivery analytics. Supports iOS, Android, and Web.",
    tech: [
      'Flutter',
      'Dart',
      'Node.js',
      'Express',
      'Google Maps API',
      'Firebase',
      'Twilio',
      'Cloudinary',
      'MongoDB',
      'Material 3'
    ],
    github: 'https://github.com/Dharaneeshsl/Dharaneesh-s-Delivery-Company',
    demo: '' // Add a live demo link if available
  },
  {
    title: 'Event Management - Eventify',
    description: 'A comprehensive event management platform enabling users to create, manage, and participate in events. Features include event creation, registration, ticketing, real-time updates, notifications, and an intuitive dashboard for organizers and attendees. Built with a modern tech stack for scalability and user experience.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Redux',
      'Tailwind CSS',
      'JWT',
      'Cloudinary'
    ],
    github: 'https://github.com/Dharaneeshsl/EVENT-MANAGEMENT-EVENTIFY',
    demo: '' // Add a live demo link if available
  },
  {
    title: 'TIN DOG - Dog Dating Application',
    description: 'A complete full-stack dog dating application built with HTML, CSS, and JavaScript. Simulates a Tinder-like experience for dogs to find their perfect match! Features include user authentication, dog profile management, swipe interface, matches dashboard, messaging system, and a modern responsive design.',
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'Bootstrap 5',
      'Font Awesome',
      'Local Storage'
    ],
    github: 'https://github.com/Dharaneeshsl/TIN-DOG-PROJECT',
    demo: '' // Add a live demo link if available
  },
  {
    title: 'Responsive Resume',
    description: 'A clean and modern responsive resume website built with HTML and CSS. Showcases professional experience, education, and skills in a visually appealing and mobile-friendly layout. Easy to customize and deploy for personal branding.',
    tech: [
      'HTML5',
      'CSS3',
      'Responsive Design'
    ],
    github: 'https://github.com/Dharaneeshsl/Responsive-Resume',
    demo: '' // Add a live demo link if available
  },
  {
    title: 'Hotel Menu Page',
    description: 'A simple and visually appealing hotel menu page for customers, built with HTML, CSS, and JavaScript. Allows users to browse menu items in a clean, responsive layout. Easy to customize for any restaurant or cafe.',
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Design'
    ],
    github: 'https://github.com/Dharaneeshsl/HOTEL-MENU-PAGE',
    demo: '' // Add a live demo link if available
  },
  {
    title: 'Restaurant Website',
    description: 'A simple and elegant restaurant website built with HTML and CSS. Features a clean menu layout, attractive design, and responsive structure for a seamless user experience on any device.',
    tech: [
      'HTML5',
      'CSS3',
      'Responsive Design'
    ],
    github: 'https://github.com/Dharaneeshsl/RESTAURANT',
    demo: '' // Add a live demo link if available
  },
  {
    title: 'Snake Game',
    description: 'A classic Snake game implemented in Python. Features smooth gameplay, increasing difficulty, and a simple user interface. Great for learning game logic and Python basics.',
    tech: [
      'Python'
    ],
    github: 'https://github.com/Dharaneeshsl/SNAKE-GAME',
    demo: '' // Add a live demo link if available
  },
  {
    title: 'Simple E-Commerce for Local Brand',
    description: 'A lightweight e-commerce platform designed for local brands. Built with JavaScript, HTML, and CSS, it offers essential features for product listing, shopping cart, and order management. Easy to customize and deploy for small businesses.',
    tech: [
      'JavaScript',
      'HTML5',
      'CSS3'
    ],
    github: 'https://github.com/Dharaneeshsl/Simple-E-Commerce-for-local-Brand',
    demo: '' // Add a live demo link if available
  },
  {
    title: 'Dice Game',
    description: 'A fun and interactive dice game built with HTML, CSS, and JavaScript. Features a simple UI, random dice rolls, and engaging gameplay for all ages.',
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript'
    ],
    github: 'https://github.com/Dharaneeshsl/DICE-GAME',
    demo: '' // Add a live demo link if available
  },
  {
    title: 'My First Portfolio',
    description: 'A simple personal portfolio website built with HTML. Includes sections for contact, hobbies, and a showcase of personal projects. Great for beginners to learn the basics of web development and personal branding.',
    tech: [
      'HTML5'
    ],
    github: 'https://github.com/Dharaneeshsl/MY-FIRST-PORTFOLIO',
    demo: '' // Add a live demo link if available
  },
  {
    title: 'CRUD Application',
    description: 'A basic CRUD (Create, Read, Update, Delete) application demonstrating fundamental operations for managing data. Built for learning and practicing essential web development concepts.',
    tech: [
      'JavaScript',
      'HTML5',
      'CSS3'
    ],
    github: 'https://github.com/Dharaneeshsl/CRUD',
    demo: '' // Add a live demo link if available
  },
  {
    title: 'Modern Blog Project',
    description: 'A beautiful, responsive, and feature-rich blog application built with HTML5, CSS3, and JavaScript. Features include dynamic content, search functionality, user authentication, category system, and a modern UI/UX with smooth animations.',
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript'
    ],
    github: 'https://github.com/Dharaneeshsl/BLOG-PROJECT',
    demo: '' // Add a live demo link if available
  }
];

const GITHUB_USERNAME = 'Dharaneeshsl'; // Replace with your GitHub username

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
          {projects.length === 0 && (
            <div className="col-span-full text-center text-subtext text-lg">No projects to display. Add your projects!</div>
          )}
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
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-accent text-accent px-4 py-2 rounded-full font-bold hover:bg-accent hover:text-black transition-colors">Preview</a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        {/* GitHub Activity Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-accent mb-4 text-center">Recent GitHub Activity</h3>
          {loading && (
            <div className="space-y-4 animate-pulse">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-black bg-opacity-30 rounded-glass shadow-glass p-4 h-16 w-full"></div>
              ))}
            </div>
          )}
          {error && <div className="text-red-500 text-center">{error}</div>}
          <ul className="space-y-4">
            {!loading && activity.map((event) => (
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