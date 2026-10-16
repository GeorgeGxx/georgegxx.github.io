import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Work from './components/Work';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import BackToTop from './components/BackToTop';
import HalloweenBats from './components/HalloweenBats';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

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
      <HalloweenBats />

      {selectedProject && (
        <Lightbox
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
