export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-h-14 py-3 sm:py-0 bg-[#070a0e]/85 backdrop-blur-xl border-t border-cyan-950/40 font-mono text-xs flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-3 text-center sm:text-left text-[11px] sm:text-xs text-slate-500">
        <span className="text-slate-400">
          © {currentYear} <span className="text-cyan-400/90 font-medium">Jorge Gallaga</span>
        </span>
        <span className="text-slate-500 text-[10px] sm:text-xs">
          Built with React 19, Tailwind CSS v4 &amp; Vite
        </span>
      </div>
    </footer>
  );
}
