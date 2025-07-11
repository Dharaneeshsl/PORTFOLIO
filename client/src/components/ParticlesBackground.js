import React, { useRef, useEffect } from 'react';

const PARTICLE_COUNT = 60;
const COLORS = ['#00ffe7', '#00bfff', '#00ff99', '#ffffff'];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle(width, height) {
  return {
    x: random(0, width),
    y: random(0, height),
    r: random(1, 3),
    dx: random(-0.3, 0.3),
    dy: random(-0.3, 0.3),
    color: COLORS[Math.floor(random(0, COLORS.length))],
    alpha: random(0.3, 0.8),
  };
}

export default function ParticlesBackground() {
  const canvasRef = useRef();
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => createParticle(width, height));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles.current) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      requestAnimationFrame(animate);
    }
    animate();
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles.current = Array.from({ length: PARTICLE_COUNT }, () => createParticle(width, height));
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
    />
  );
} 