import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-background min-h-screen text-text font-sans">
              <ParticlesBackground />
              <Navbar />
              <main>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="skills"><Skills /></section>
                <section id="projects"><Projects /></section>
                <section id="resume"><Resume /></section>
                <section id="contact"><Contact /></section>
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
