import React from 'react';

export default function Resume() {
  return (
    <section className="py-20 bg-background flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">Resume</h2>
      <a
        href="/resume.pdf"
        download
        className="bg-accent text-black px-6 py-3 rounded-full font-bold shadow-neon hover:bg-white hover:text-accent transition-colors"
      >
        Download Resume
      </a>
    </section>
  );
} 