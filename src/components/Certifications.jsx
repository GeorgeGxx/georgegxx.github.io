import { certsData } from '../data/stackData';
import { ProviderIcon } from './CloudIcons';

export default function Certifications() {
  return (
    <section className="py-16 sm:py-20 bg-[#090d12] border-y border-slate-800/60 relative" id="certs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 scroll-reveal">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <p className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-2">// 04 · certs</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; credentials
          </h2>
        </div>

        {/* Certs Grid - Compact 6 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {certsData.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#0d141d]/80 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-[#101824] transition-all duration-200 flex items-center justify-between hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-7 h-7 shrink-0 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                  <ProviderIcon id={cert.badge} size={16} />
                </span>
                <span className="font-medium text-slate-200 group-hover:text-cyan-300 transition-colors text-xs sm:text-sm truncate">
                  {cert.title}
                </span>
              </div>

              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                aria-hidden="true"
                className="text-slate-500 group-hover:text-cyan-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-2"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17 17 7M9 7h8v8"
                />
              </svg>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
