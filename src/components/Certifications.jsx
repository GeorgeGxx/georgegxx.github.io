import { certsData } from '../data/stackData';

export default function Certifications() {
  return (
    <section className="py-24 bg-[#090d12] border-y border-slate-800/60 relative" id="certs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-2">// 04 · certs</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; credentials
          </h2>
        </div>

        {/* Certs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certsData.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-[#0d141d]/80 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-[#101824] transition-all duration-200 flex items-center justify-between hover:shadow-[0_0_20px_rgba(34,211,238,0.08)] hover:-translate-x-1"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center font-mono text-[10px] text-cyan-400 font-bold group-hover:border-cyan-500/40 transition-colors">
                  {cert.badge}
                </span>
                <span className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors text-sm sm:text-base">
                  {cert.title}
                </span>
              </div>

              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
                className="text-slate-500 group-hover:text-cyan-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
