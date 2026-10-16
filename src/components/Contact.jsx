export default function Contact() {
  return (
    <section className="py-28 relative overflow-hidden text-center" id="contact">
      {/* Background glow radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <p className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-3">// 05 · contact</p>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Let's build something reliable
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Open to Cloud Platform Engineering, DevSecOps and Enterprise Solution Architect roles.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/albertoarevalo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-sm font-bold bg-[#0077b5] text-white hover:bg-[#0088d1] transition-all duration-200 shadow-[0_4px_25px_rgba(0,119,181,0.35)] hover:shadow-[0_6px_30px_rgba(0,119,181,0.5)] hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
            </svg>
            Message me on LinkedIn
          </a>

          <a
            href="https://github.com/GeorgeGxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-medium text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/80 hover:text-cyan-300 transition-all duration-200 hover:-translate-y-0.5"
          >
            See the code on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
