import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-slate-900/90 text-cyan-400 border border-slate-700/80 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      ↑
    </button>
  );
}
