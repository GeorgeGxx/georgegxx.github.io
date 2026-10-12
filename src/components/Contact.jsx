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
            href="https://wa.me/525514925837"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-sm font-bold bg-[#25d366] text-[#042512] hover:bg-[#34e777] transition-all duration-200 shadow-[0_4px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.5)] hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.03 8.03 0 0 1-1.23-4.29c0-4.43 3.61-8.04 8.04-8.04 2.15 0 4.16.84 5.68 2.36a7.98 7.98 0 0 1 2.35 5.68c0 4.43-3.61 8.04-8.06 8.04zm4.41-6.03c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z"/>
            </svg>
            Message on WhatsApp
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
