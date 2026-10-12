import { useEffect } from 'react';

export default function Lightbox({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const handleImageError = (e) => {
    if (project.fallbackImage && e.target.src.includes('.webp')) {
      e.target.src = project.fallbackImage;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project architecture diagram preview"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Dialog box */}
      <div className="relative z-10 max-w-5xl w-full max-h-[90vh] rounded-2xl bg-[#0c1219] border border-slate-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(34,211,238,0.15)] overflow-hidden flex flex-col">
        {/* Header / close button */}
        <div className="px-5 py-3.5 bg-[#080d12] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{project.categoryLabel}</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300 font-bold truncate max-w-md">{project.title}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        {/* Diagram Image */}
        <div className="p-3 sm:p-6 bg-[#060a0e] overflow-auto flex items-center justify-center min-h-[300px]">
          <img
            src={project.fullImage || project.image}
            alt={project.caption}
            onError={handleImageError}
            className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-lg border border-slate-800/60"
          />
        </div>

        {/* Caption & details footer */}
        <div className="p-4 bg-[#0a0f16] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-slate-400">
          <p className="m-0 text-slate-300">{project.caption}</p>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Press</span>
            <kbd className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[11px]">ESC</kbd>
            <span className="text-slate-500">to exit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
