import { stackCards } from '../data/stackData';

export default function Stack() {
  const getProviderIcon = (id) => {
    switch (id) {
      case 'aws':
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className="text-amber-400">
            <path fill="currentColor" d="M6.8 12.6c0 .4 0 .7.1.9l.3.7c0 .1.1.2.1.3s0 .2-.1.3l-.5.3-.2.1a.4.4 0 0 1-.3-.1c-.1-.1-.2-.2-.3-.4l-.2-.4a4.7 4.7 0 0 1-3.6 1.6c-1 0-1.8-.3-2.4-.9-.6-.6-.9-1.3-.9-2.3 0-1 .4-1.8 1.1-2.4.7-.6 1.7-.9 2.9-.9.4 0 .8 0 1.3.1s.9.2 1.4.3v-.9c0-.9-.2-1.6-.6-2-.4-.4-1.1-.6-2-.6-.4 0-.9 0-1.3.1a9.7 9.7 0 0 0-1.6.5l-.3.1h-.1c-.2 0-.3-.1-.3-.4v-.5c0-.2 0-.3.1-.4l.3-.3c.4-.2.9-.4 1.5-.5.6-.2 1.2-.2 1.9-.2 1.5 0 2.5.3 3.2 1 .7.7 1 1.7 1 3.1v4.1zm-4.9 1.8c.4 0 .8-.1 1.3-.2.4-.2.8-.5 1.2-.9.2-.2.3-.5.4-.8s.1-.6.1-1v-.5c-.4-.1-.7-.2-1.1-.2-.4-.1-.8-.1-1.1-.1-.8 0-1.4.2-1.8.5-.4.3-.6.7-.6 1.3 0 .5.1.9.4 1.2.3.4.7.5 1.2.5v.2zm9.8 1.3c-.2 0-.3 0-.4-.1-.1-.1-.2-.2-.2-.4l-2.4-8c-.1-.2-.1-.4-.1-.5 0-.2.1-.3.3-.3h1c.2 0 .3 0 .4.1s.2.2.2.4l1.7 6.7 1.6-6.7c0-.2.1-.3.2-.4s.2-.1.4-.1h.8c.2 0 .3 0 .4.1s.2.2.2.4l1.6 6.8 1.7-6.8c.1-.2.1-.3.2-.4s.2-.1.4-.1h1c.2 0 .3.1.3.3v.2l-.1.3-2.5 8c-.1.2-.1.3-.2.4-.1.1-.2.1-.4.1h-.9c-.2 0-.3 0-.4-.1s-.2-.2-.2-.4L18 9.8l-1.6 6.6c0 .2-.1.3-.2.4s-.2.1-.4.1h-1.1z"/><path fill="currentColor" d="M21.6 19.5c-2.6 1.9-6.3 2.9-9.5 2.9-4.5 0-8.6-1.7-11.6-4.4-.2-.2 0-.5.3-.4 3.4 2 7.5 3.1 11.8 3.1 2.9 0 6.1-.6 9-1.8.4-.2.8.3.4.6z" opacity=".85"/>
          </svg>
        );
      case 'azure':
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className="text-blue-400">
            <path fill="currentColor" d="M9.5 3.5h5.4l-5.6 16.2-6.3-2.1L9.5 3.5z" opacity=".9"/><path fill="currentColor" d="M14.9 3.5 6.4 15.6l7.9 4.9L23 8.6h-5.7z" opacity=".65"/>
          </svg>
        );
      case 'gcp':
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className="text-emerald-400">
            <path fill="currentColor" d="M14.9 7.5h.6l1.8-1.8.1-.8a7.9 7.9 0 0 0-12.5 4l1-.1 2-.3s.1-.5.1-.6a4.4 4.4 0 0 1 7.3-2.6l-.4.4z" opacity=".9"/><path fill="currentColor" d="M20.1 8.9a7.9 7.9 0 0 0-2.4-3.8l-2 2a4.4 4.4 0 0 1 1.6 3.5v.4a3.3 3.3 0 0 1 0 6.6h-4.4l-.4.5v2.6l.4.4h4.4a5.7 5.7 0 0 0 2.8-10.7z" opacity=".65"/>
          </svg>
        );
      case 'devsecops':
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className="text-cyan-400">
            <path fill="currentColor" d="M12 2 4 5v6c0 5.1 3.4 9.7 8 11 4.6-1.3 8-5.9 8-11V5l-8-3zm0 2.2 6 2.2v4.6c0 4.1-2.6 8-6 9.1-3.4-1.1-6-5-6-9.1V6.4l6-2.2z"/><path fill="currentColor" d="M11 15.5 8 12.4l1.4-1.4L11 12.6l3.6-3.6L16 10.3z"/>
          </svg>
        );
      case 'data-ai':
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className="text-purple-400">
            <ellipse cx="12" cy="5.5" rx="7" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1.5"/><path fill="none" stroke="currentColor" strokeWidth="1.5" d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6"/><path fill="none" stroke="currentColor" strokeWidth="1.5" d="M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className="text-teal-400">
            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M4 12a8 8 0 1 1 2.3 5.6"/><path fill="currentColor" d="M4 12 1.8 9.5 6 8.8z"/>
          </svg>
        );
    }
  };

  return (
    <section className="py-24 bg-[#090d12] border-y border-slate-800/60 relative" id="stack">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-2">// 02 · stack</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Tools of the trade</h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">Not a proficiency meter — this is the stack in daily rotation.</p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCards.map((card) => (
            <div
              key={card.id}
              className="group p-6 rounded-2xl bg-[#0d141d]/80 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#101824] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(34,211,238,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 group-hover:border-cyan-500/30 transition-colors">
                    {getProviderIcon(card.id)}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {card.provider}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
