import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen-minus-navbar text-center select-none">
      <h3 className="text-xl md:text-2xl font-semibold text-accent mb-2 animate-pulse">Welcome to my Portfolio!</h3>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">Dharaneesh S L</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-accent mb-2">MERN Stack Web Developer</h2>
      <p className="text-lg md:text-xl text-subtext max-w-xl">Building modern, scalable, and beautiful web applications. <span className="text-accent"> Let's create something amazing!</span></p>
    </div>
  );
} 