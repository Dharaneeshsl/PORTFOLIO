import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-background flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="w-40 h-40 rounded-full overflow-hidden shadow-glass border-4 border-accent flex-shrink-0">
        {/* Placeholder headshot */}
        <img src="https://via.placeholder.com/200x200.png?text=Headshot" alt="Headshot" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-subtext text-lg">I am a passionate Mern stack web developer building high-quality, scalable web applications using the latest technologies. I love solving problems, learning new things, and collaborating with others to create impactful digital experiences.</p>
      </div>
    </section>
  );
} 