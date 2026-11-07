import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Work from './components/Work';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const Lightbox = lazy(() => import('./components/Lightbox'));
const HalloweenBats = lazy(() => import('./components/HalloweenBats'));
const ChristmasSnow = lazy(() => import('./components/ChristmasSnow'));

function getActiveSeason() {
  if (typeof window !== 'undefined') {
    const param = new URLSearchParams(window.location.search).get('season');
    if (param === 'halloween' || param === 'christmas' || param === 'none') {
      return param;
    }
  }
  const month = new Date().getMonth(); // 0 = Jan, 9 = Oct, 10 = Nov, 11 = Dec

  // Halloween: Oct 1 00:00:00 – Oct 31 23:59:59
  if (month === 9) return 'halloween';

  // Christmas: Nov 1 00:00:00 – Dec 31 23:59:59 (switches at midnight 00:00:00)
  if (month === 10 || month === 11) return 'christmas';

  // Rest of the year (Jan 1 00:00:00 – Sep 30 23:59:59)
  return 'none';
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSeason, setActiveSeason] = useState(getActiveSeason);

  // Live midnight (00:00:00) switch if the user has the page open across date boundaries
  useEffect(() => {
    let timeoutId;
    const scheduleMidnightCheck = () => {
      const now = new Date();
      const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0, 0, 0, 50
      );
      const msUntilMidnight = nextMidnight.getTime() - now.getTime();
      timeoutId = setTimeout(() => {
        setActiveSeason(getActiveSeason());
        scheduleMidnightCheck();
      }, msUntilMidnight);
    };

    scheduleMidnightCheck();
    return () => clearTimeout(timeoutId);
  }, []);

  // Native IntersectionObserver for smooth scroll-reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#070a0e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main id="top" className="flex-1">
        <Hero />
        <About />
        <Stack />
        <Work onSelectProject={setSelectedProject} />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      {activeSeason === 'halloween' && (
        <Suspense fallback={null}>
          <HalloweenBats />
        </Suspense>
      )}

      {activeSeason === 'christmas' && (
        <Suspense fallback={null}>
          <ChristmasSnow />
        </Suspense>
      )}

      {selectedProject && (
        <Suspense fallback={null}>
          <Lightbox
            project={selectedProject}
            onSelectProject={setSelectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      )}
    </div>
  );
}
