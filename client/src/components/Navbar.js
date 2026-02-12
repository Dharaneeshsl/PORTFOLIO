import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-black focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-glass py-2' : 'bg-transparent py-4'
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-accent hover:to-white transition-all duration-300 transform hover:scale-105"
          >
            PORTFOLIO
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8" role="menubar">
            {navLinks.map((link) => (
              <li key={link.name} role="none">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-subtext hover:text-accent hover:shadow-[0_0_10px_rgba(0,255,231,0.5)] transition-all duration-300 font-medium cursor-pointer px-3 py-1 rounded-full hover:bg-white/5"
                  role="menuitem"
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent cursor-pointer text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-t border-gray-800 overflow-hidden"
              role="menu"
            >
              <div className="flex flex-col space-y-4 p-8 items-center">
                {navLinks.map((link) => (
                  <li key={link.name} role="none" className="w-full text-center">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block text-xl text-subtext hover:text-accent hover:bg-white/5 py-3 rounded-xl transition-colors duration-200"
                      role="menuitem"
                      aria-label={`Navigate to ${link.name} section`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
