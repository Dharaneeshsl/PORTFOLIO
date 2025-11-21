import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/dharaneesh-s-l-871575316', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/dharaneesh_1911/', label: 'Instagram' },
    { icon: <FaGithub />, url: 'https://github.com/Dharaneeshsl', label: 'GitHub' },
    { icon: <FaTwitter />, url: 'https://x.com/Dharaneesh97473', label: 'Twitter' },
  ];

  return (
    <footer className="py-8 bg-black border-t border-glass-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold font-heading text-white">
            Dharaneesh<span className="text-accent">.</span>
          </h3>
          <p className="text-subtext text-sm mt-2">
            Building digital experiences that matter.
          </p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#00f2ea' }}
              className="text-subtext text-2xl transition-colors duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <div className="text-subtext text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Dharaneesh.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}