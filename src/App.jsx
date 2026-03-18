import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    // Intersection Observer for Scroll Animations
    const revealElements = document.querySelectorAll('.reveal');
    const skillBars = document.querySelectorAll('.progress-fill');

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));

    // Dynamic Skill Bar Progression
    const barObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute('data-width');
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 300);
          obs.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => barObserver.observe(bar));

    return () => {
      revealObserver.disconnect();
      barObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <footer id="contact">
        <p>Built thoroughly. Portfolio by Sublari Lochan &copy; 2026</p>
      </footer>
    </>
  );
}

export default App;
