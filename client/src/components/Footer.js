import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-subtext bg-background border-t border-accent flex flex-col items-center gap-2">
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://www.linkedin.com/in/dharaneesh-s-l-871575316" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-2xl" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/dharaneesh_1911/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-2xl" title="Instagram">
          <FaInstagram />
        </a>
        <a href="https://github.com/Dharaneeshsl" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-2xl" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://x.com/Dharaneesh97473" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-2xl" title="X (Twitter)">
          <FaXTwitter />
        </a>
      </div>
      <span>&copy; {new Date().getFullYear()} Dharaneesh. All rights reserved.</span>
    </footer>
  );
} 