import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { href: '#about', label: 'about' },
    { href: '#stack', label: 'stack' },
    { href: '#work', label: 'work' },
    { href: '#certs', label: 'certs' },
    { href: '#contact', label: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. If at (or near) the bottom of the page, activate 'contact' immediately
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // 2. Check sections from bottom to top against current scroll offset
      const sections = ['contact', 'certs', 'work', 'stack', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(section);
          return;
        }
      }

      setActiveSection('hero');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-[#070a0e]/85 backdrop-blur-xl border-b border-cyan-950/40">
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        {/* Brand: Opción 3 - Barrido de Luz / Shimmer Holográfico */}
        <a
          href="#top"
          className="group flex items-center font-mono text-sm font-bold tracking-tight transition-all duration-300"
          aria-label="Jorge Gallaga Cloud"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent animate-shimmer group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.85)] transition-all">
            jgallaga@cloud
          </span>
          <span className="text-cyan-400/70 ml-1 group-hover:text-cyan-200 transition-colors">
            :~$
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors ${
                  isActive ? 'text-cyan-400 font-medium' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Live Meta Info */}
        <div className="hidden lg:flex items-center gap-4 font-mono text-[11px] text-slate-400">
          <span className="flex items-center gap-2 text-emerald-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
            </span>
            status: operational
          </span>
          <span className="border-l border-slate-800 pl-4 text-slate-500">region: mx-central-1</span>
          <span className="border-l border-slate-800 pl-4 flex items-center gap-2">
            <span className="text-slate-500">availability:</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-400/50 shadow-[0_0_14px_rgba(52,211,153,0.5)] animate-pulse tracking-wide">
              open to work
            </span>
          </span>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded border border-slate-800 text-slate-300 hover:text-cyan-400"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className={`block w-4 h-[1.5px] bg-current transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
          <span className={`block w-4 h-[1.5px] bg-current transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-4 h-[1.5px] bg-current transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-[#070a0e]/95 backdrop-blur-2xl border-b border-cyan-950/60 p-5 flex flex-col gap-4 font-mono text-sm shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-cyan-400 transition-colors py-1 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-slate-600 text-xs">→</span>
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
            <span className="text-emerald-400 flex items-center gap-2 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
              </span>
              operational
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-400/50 shadow-[0_0_12px_rgba(52,211,153,0.5)] animate-pulse">
              open to work
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
