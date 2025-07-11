import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-subtext bg-background border-t border-accent">
      <span>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</span>
    </footer>
  );
} 