import { useState, useEffect } from 'react';

const ROLES = [
  'Cloud Architect',
  'DevSecOps Engineer',
  'AI Solutions Builder',
  'Data Engineer',
  'Multi-Cloud Specialist'
];

const SPINNER = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

export default function Terminal() {
  const [typedRole, setTypedRole] = useState('Cloud Architect');
  const [spinnerFrame, setSpinnerFrame] = useState(0);

  // Live spinner for executing/provisioning status
  useEffect(() => {
    const timer = setInterval(() => {
      setSpinnerFrame((f) => (f + 1) % SPINNER.length);
    }, 90);
    return () => clearInterval(timer);
  }, []);

  // Typewriter effect for role rotation
  useEffect(() => {
    let roleIdx = 0;
    let charIdx = ROLES[0].length;
    let isDeleting = true;
    let timer;

    const tick = () => {
      const current = ROLES[roleIdx];

      if (!isDeleting) {
        charIdx++;
        setTypedRole(current.slice(0, charIdx));
        if (charIdx === current.length) {
          isDeleting = true;
          timer = setTimeout(tick, 2200);
          return;
        }
      } else {
        charIdx--;
        setTypedRole(current.slice(0, charIdx));
        if (charIdx === 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % ROLES.length;
          timer = setTimeout(tick, 450);
          return;
        }
      }

      timer = setTimeout(tick, isDeleting ? 35 : 65);
    };

    // Initial 2.5s delay so the reader reads "Cloud Architect" cleanly first
    timer = setTimeout(tick, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-2xl bg-[#0c1219]/90 border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(34,211,238,0.08)] overflow-hidden transition-all duration-300 hover:border-cyan-500/40">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#090e14] border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="font-mono text-xs text-slate-400">jorge — zsh — 80×24</div>
        <div className="w-12 text-right">
          <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest">LIVE</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed max-h-[380px] overflow-y-auto terminal-scroll">
        <p className="text-slate-200 mb-1">
          <span className="text-cyan-400 mr-2">$</span>whoami
        </p>
        <p className="text-slate-400 mb-3 ml-4">jorge_gallaga</p>

        <p className="text-slate-200 mb-1">
          <span className="text-cyan-400 mr-2">$</span>cat role.txt
        </p>
        <p className="text-cyan-300 font-semibold mb-3 ml-4">
          <span>{typedRole}</span>
          <span className="inline-block w-2 h-3.5 bg-cyan-400 ml-1 animate-pulse" />
        </p>

        <p className="text-slate-200 mb-1">
          <span className="text-cyan-400 mr-2">$</span>kubectl get skills -n core
        </p>
        <div className="text-slate-400 ml-4 space-y-0.5">
          <div className="text-slate-500 font-bold">NAME          READY  STATUS</div>
          <div className="flex justify-between max-w-[280px]">
            <span>aws</span>
            <span>1/1</span>
            <span className="text-emerald-400 font-medium">Running</span>
          </div>
          <div className="flex justify-between max-w-[280px]">
            <span>azure</span>
            <span>1/1</span>
            <span className="text-emerald-400 font-medium">Running</span>
          </div>
          <div className="flex justify-between max-w-[280px]">
            <span>gcp</span>
            <span>1/1</span>
            <span className="text-emerald-400 font-medium">Running</span>
          </div>
          <div className="flex justify-between max-w-[280px]">
            <span>devsecops</span>
            <span>1/1</span>
            <span className="text-emerald-400 font-medium">Running</span>
          </div>
          <div className="flex justify-between max-w-[280px]">
            <span>ai-data</span>
            <span>1/1</span>
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <span>Provisioning</span>
              <span className="font-mono text-cyan-400">{SPINNER[spinnerFrame]}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
