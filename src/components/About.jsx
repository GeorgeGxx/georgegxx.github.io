import { useState } from 'react';

export default function About() {
  const [copied, setCopied] = useState(false);

  const yamlContent = `role: Cloud & AI Solutions Architect
experience: 15 years
focus: [cloud architecture, devsecops, AI platforms, data engineering]
languages:
  - spanish: native
  - english: fluent
education:
  - degree: CS Engineering
  - degree: MBA, Finance
  - institution: UNITEC
status: open_to_work: true`;

  const copyYaml = () => {
    navigator.clipboard?.writeText(yamlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-2">// 01 · about</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Background</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Photo & Status Tag */}
          <div className="lg:col-span-5 max-w-sm mx-auto lg:mx-0 w-full">
            <div className="relative group">
              {/* Glow backing */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src="assets/img/profile.jpg"
                  alt="Portrait of Jorge Gallaga"
                  loading="lazy"
                  width="400"
                  height="500"
                  className="w-full aspect-[4/5] object-cover filter contrast-[1.03] transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <div className="absolute bottom-3 left-3 right-3 bg-[#070a0e]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/80 flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-2 text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    available for new roles
                  </span>
                  <span className="text-cyan-400 font-semibold">15 yrs exp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio text & YAML card */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Results-driven Cloud &amp; AI Solutions Architect designing, developing and deploying secure, scalable cloud-native applications and infrastructure. I apply a secure-by-design mindset and the Well-Architected Framework to build resilient, cost-optimized platforms at scale — with strong focus on observability, cyber governance and full-stack automation across multi-cloud environments. Proven track record leading cross-functional teams, embedding Agile best practices and shipping business-aligned solutions end-to-end.
            </p>

            {/* YAML Card */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0b1016] shadow-xl">
              <div className="px-4 py-2.5 bg-[#0e151e] border-b border-slate-800 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  about.yaml
                </span>
                <button
                  type="button"
                  onClick={copyYaml}
                  className="font-mono text-[11px] px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  {copied ? '✓ copied!' : 'copy spec'}
                </button>
              </div>

              <pre className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
                <span className="text-cyan-400">role:</span> <span className="text-slate-200">Cloud &amp; AI Solutions Architect</span>{'\n'}
                <span className="text-cyan-400">experience:</span> <span className="text-slate-200">15 years</span>{'\n'}
                <span className="text-cyan-400">focus:</span> <span className="text-emerald-400">[cloud architecture, devsecops, AI platforms, data engineering]</span>{'\n'}
                <span className="text-cyan-400">languages:</span>{'\n'}
                {'  '}- <span className="text-slate-400">spanish:</span> <span className="text-slate-200">native</span>{'\n'}
                {'  '}- <span className="text-slate-400">english:</span> <span className="text-slate-200">fluent</span>{'\n'}
                <span className="text-cyan-400">education:</span>{'\n'}
                {'  '}- <span className="text-slate-400">degree:</span> <span className="text-slate-200">CS Engineering</span>{'\n'}
                {'  '}- <span className="text-slate-400">degree:</span> <span className="text-slate-200">MBA, Finance</span>{'\n'}
                {'  '}- <span className="text-slate-400">institution:</span> <span className="text-slate-200">UNITEC</span>{'\n'}
                <span className="text-cyan-400">status:</span> <span className="text-amber-400 font-semibold">open_to_work: true</span>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
