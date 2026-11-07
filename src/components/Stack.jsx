import { stackCards } from '../data/stackData';
import { ProviderIcon } from './CloudIcons';

export default function Stack() {
  return (
    <section className="py-24 bg-[#090d12] border-y border-slate-800/60 relative" id="stack">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 scroll-reveal">
        
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
                    <ProviderIcon id={card.id} size={22} />
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
