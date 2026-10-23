import Terminal from './Terminal';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden" id="hero">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 font-mono text-xs text-cyan-400 mb-5 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <span>// portfolio · deployed from master</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
              Jorge Gallaga
            </h1>

            <p className="font-mono text-lg sm:text-xl text-cyan-400 font-semibold mb-6">
              Multi-Cloud &amp; AI Solutions Architect
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              15 years designing, building and hardening secure, highly-available cloud platforms with DevSecOps automation across AWS, Azure and GCP — now pivoting deep into AI-driven architecture and data engineering.
            </p>

            {/* Strategic CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="https://www.linkedin.com/in/albertoarevalo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-bold bg-[#0077b5] text-white hover:bg-[#0088d1] transition-all duration-200 shadow-[0_4px_20px_rgba(0,119,181,0.35)] hover:shadow-[0_6px_25px_rgba(0,119,181,0.5)] hover:-translate-y-0.5 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
                  <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
                </svg>
                Connect on LinkedIn
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-medium text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/80 hover:text-cyan-300 transition-all duration-200 hover:-translate-y-0.5"
              >
                View the work ↓
              </a>
            </div>

            {/* Social Icons row */}
            <ul className="flex items-center gap-3.5" aria-label="Social profiles">
              <li>
                <a
                  href="https://wa.me/525514925837"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#25d366] hover:border-[#25d366]/50 hover:shadow-[0_0_15px_rgba(37,211,102,0.2)] transition-all duration-200 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.03 8.03 0 0 1-1.23-4.29c0-4.43 3.61-8.04 8.04-8.04 2.15 0 4.16.84 5.68 2.36a7.98 7.98 0 0 1 2.35 5.68c0 4.43-3.61 8.04-8.06 8.04zm4.41-6.03c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GeorgeGxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-200 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.33 1.1 2.9.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.19C22 6.58 17.52 2 12 2z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://hub.docker.com/u/georgegxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Docker Hub"
                  className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-200 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="currentColor" d="M21.9 10.4c-.6-.4-1.7-.6-2.7-.4-.1-.9-.6-1.7-1.4-2.4l-.4-.3-.3.4c-.5.6-.7 1.6-.6 2.4.1.5.3.9.6 1.3-.3.2-.5.2-.8.3H2.6c-.2 1.4 0 2.9.9 4.2 1 1.5 2.7 2.3 4.8 2.3 4.5 0 7.9-2.1 9.4-5.9 1 .1 1.9-.2 2.5-.9.4-.5.6-1 .7-1.7l.1-.5-.2.2zM5.9 11h1.9V9.2H5.9V11zm2.6 0h1.9V9.2H8.5V11zm2.6 0h1.9V9.2h-1.9V11zm2.6 0h1.9V9.2h-1.9V11zM8.5 8.5h1.9V6.7H8.5v1.8zm2.6 0h1.9V6.7h-1.9v1.8zm2.6 0h1.9V6.7h-1.9v1.8zM5.9 8.5h1.9V6.7H5.9v1.8z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/15237324/george-g"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Stack Overflow"
                  className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-200 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="currentColor" d="M17.4 18.5v-4.2h1.7V20.2H4.9v-5.9h1.7v4.2h10.8z"/><path fill="currentColor" d="m8 13.2 8.4 1.8.3-1.6-8.4-1.8-.3 1.6zm1.1-3.9 7.8 3.6.7-1.5-7.8-3.6-.7 1.5zm2.1-3.7 6.6 5.5 1-1.3-6.6-5.5-1 1.3zM15.3 2l-1.4 1 5 6.7 1.4-1-5-6.7zM8 17h8.5v-1.7H8V17z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Interactive Terminal */}
          <div className="lg:col-span-5">
            <Terminal />
          </div>

        </div>
      </div>
    </section>
  );
}
