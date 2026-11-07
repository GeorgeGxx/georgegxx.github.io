import { useState, useEffect } from 'react';
import { projects } from '../data/projects';

export default function Lightbox({ project, onClose, onSelectProject }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const currentIndex = projects.findIndex((p) => p.id === project?.id);
  const total = projects.length;

  const goPrev = () => {
    if (!onSelectProject || currentIndex === -1) return;
    setIsZoomed(false);
    const prevIndex = (currentIndex - 1 + total) % total;
    onSelectProject(projects[prevIndex]);
  };

  const goNext = () => {
    if (!onSelectProject || currentIndex === -1) return;
    setIsZoomed(false);
    const nextIndex = (currentIndex + 1) % total;
    onSelectProject(projects[nextIndex]);
  };

  useEffect(() => {
    setIsZoomed(false);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, currentIndex]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project architecture diagram preview"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Dialog box */}
      <div className="relative z-10 max-w-5xl w-full max-h-[94vh] sm:max-h-[92vh] rounded-xl sm:rounded-2xl bg-[#0c1219] border border-slate-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(34,211,238,0.15)] overflow-hidden flex flex-col">
        {/* Header / controls */}
        <div className="px-3.5 sm:px-5 py-2.5 sm:py-3 bg-[#080d12] border-b border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-cyan-400 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
            </span>
            <span className="hidden sm:inline shrink-0">{project.categoryLabel}</span>
            <span className="hidden sm:inline text-slate-600">/</span>
            <span className="text-slate-200 font-bold truncate">{project.title}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Prev / Next Navigation */}
            <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-0.5">
              <button
                type="button"
                onClick={goPrev}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-md hover:bg-slate-800 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-colors cursor-pointer text-xs font-mono"
                aria-label="Previous architecture diagram"
                title="Previous project (←)"
              >
                ←
              </button>
              <span className="px-1.5 font-mono text-[10px] text-slate-500 select-none">
                {currentIndex + 1}/{total}
              </span>
              <button
                type="button"
                onClick={goNext}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-md hover:bg-slate-800 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-colors cursor-pointer text-xs font-mono"
                aria-label="Next architecture diagram"
                title="Next project (→)"
              >
                →
              </button>
            </div>

            {/* Zoom Toggle Button */}
            <button
              type="button"
              onClick={() => setIsZoomed((z) => !z)}
              className={`px-2.5 h-7 sm:h-8 rounded-lg border font-mono text-[11px] flex items-center gap-1 transition-colors cursor-pointer ${
                isZoomed
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                  : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
              aria-label="Toggle zoom"
              title="Toggle 2x diagram zoom"
            >
              <span>{isZoomed ? '1x' : '2x'}</span>
              <span className="hidden sm:inline">zoom</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-xs sm:text-sm"
              aria-label="Close dialog"
              title="Close (ESC)"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Diagram Image Viewport */}
        <div className="relative p-2 sm:p-5 bg-[#060a0e] overflow-auto flex items-center justify-center min-h-[190px] sm:min-h-[280px] flex-1 terminal-scroll">
          <img
            src={project.fullImage || project.image}
            alt={project.caption}
            decoding="async"
            onClick={() => setIsZoomed((z) => !z)}
            className={`transition-transform duration-300 rounded-lg shadow-lg border border-slate-800/60 ${
              isZoomed
                ? 'max-w-none w-[165%] sm:w-[150%] cursor-zoom-out'
                : 'max-h-[46vh] sm:max-h-[54vh] w-auto max-w-full object-contain cursor-zoom-in'
            }`}
          />
        </div>

        {/* Executive Case Study Details & Highlights Footer */}
        <div className="p-3.5 sm:p-5 bg-[#0a0f16] border-t border-slate-800/90 space-y-3">
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 mb-1.5">
                // Architecture Highlights &amp; Impact
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-slate-300 leading-relaxed">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800/80 flex items-start gap-2"
                  >
                    <span className="text-emerald-400 font-mono text-xs shrink-0 mt-0.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-800/50 font-mono text-[11px] text-slate-400">
            <div className="flex flex-wrap items-center gap-1.5">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-cyan-300/90 border border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2 shrink-0 text-[11px]">
              <span className="text-slate-500">Navigate</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">←</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">→</kbd>
              <span className="text-slate-600">·</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">ESC</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
