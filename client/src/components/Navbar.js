import React, { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // offset for navbar
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-background bg-opacity-80 backdrop-blur-lg shadow-glass">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-2xl font-bold tracking-widest text-accent">Portfolio</span>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="text-subtext hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile menu button */}
        <div className="md:hidden text-accent cursor-pointer text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-background bg-opacity-95 px-8 py-6 flex flex-col space-y-4 shadow-glass">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="block text-subtext hover:text-accent text-lg font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
} 