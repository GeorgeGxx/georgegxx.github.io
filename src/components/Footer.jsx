export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-900 bg-[#06090d] text-center text-xs font-mono text-slate-500">
      <div className="max-w-6xl mx-auto px-4">
        <span>© {currentYear} Jorge Gallaga. Built with React 19, Tailwind CSS v4 &amp; Vite.</span>
      </div>
    </footer>
  );
}
