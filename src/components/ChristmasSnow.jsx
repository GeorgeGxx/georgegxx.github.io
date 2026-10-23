import { useState, useEffect } from 'react';

const SNOWFLAKES = [
  { id: 1, left: '6%', size: 'w-5 h-5', anim: 'animate-snow-fall-1', sway: 'animate-snow-sway-1', opacity: 'opacity-75', variant: 'crystal', glow: 'drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]', color: 'text-cyan-200' },
  { id: 2, left: '16%', size: 'w-3.5 h-3.5', anim: 'animate-snow-fall-2', sway: 'animate-snow-sway-2', opacity: 'opacity-55', variant: 'star', glow: 'drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]', color: 'text-slate-100' },
  { id: 3, left: '27%', size: 'w-6 h-6', anim: 'animate-snow-fall-3', sway: 'animate-snow-sway-1', opacity: 'opacity-80', variant: 'crystal', glow: 'drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]', color: 'text-emerald-200' },
  { id: 4, left: '38%', size: 'w-3 h-3', anim: 'animate-snow-fall-4', sway: 'animate-snow-sway-2', opacity: 'opacity-45', variant: 'dot', glow: 'drop-shadow-[0_0_5px_rgba(34,211,238,0.35)]', color: 'text-cyan-100' },
  { id: 5, left: '50%', size: 'w-5 h-5', anim: 'animate-snow-fall-5', sway: 'animate-snow-sway-1', opacity: 'opacity-70', variant: 'star', glow: 'drop-shadow-[0_0_8px_rgba(250,204,21,0.35)]', color: 'text-amber-100' },
  { id: 6, left: '63%', size: 'w-4 h-4', anim: 'animate-snow-fall-1-delayed', sway: 'animate-snow-sway-2', opacity: 'opacity-65', variant: 'crystal', glow: 'drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]', color: 'text-cyan-200' },
  { id: 7, left: '74%', size: 'w-3 h-3', anim: 'animate-snow-fall-2-delayed', sway: 'animate-snow-sway-1', opacity: 'opacity-50', variant: 'dot', glow: 'drop-shadow-[0_0_5px_rgba(255,255,255,0.35)]', color: 'text-white' },
  { id: 8, left: '84%', size: 'w-5.5 h-5.5', anim: 'animate-snow-fall-3-delayed', sway: 'animate-snow-sway-2', opacity: 'opacity-75', variant: 'crystal', glow: 'drop-shadow-[0_0_9px_rgba(34,211,238,0.45)]', color: 'text-cyan-100' },
  { id: 9, left: '93%', size: 'w-4 h-4', anim: 'animate-snow-fall-4-delayed', sway: 'animate-snow-sway-1', opacity: 'opacity-60', variant: 'star', glow: 'drop-shadow-[0_0_7px_rgba(52,211,153,0.35)]', color: 'text-emerald-100' }
];

export default function ChristmasSnow() {
  const [clickFlakes, setClickFlakes] = useState([]);

  // Easter egg: Spawns a crystalline frost burst when clicking on empty background
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (target.closest('button, a, input, textarea, select')) return;

      const newFlake = {
        id: `${Date.now()}-${Math.random()}`,
        x: e.clientX,
        y: e.clientY
      };

      setClickFlakes((prev) => [...prev.slice(-3), newFlake]);

      setTimeout(() => {
        setClickFlakes((prev) => prev.filter((f) => f.id !== newFlake.id));
      }, 1500);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden select-none" aria-hidden="true">
      {SNOWFLAKES.map((flake) => (
        <div
          key={flake.id}
          className={`absolute -top-10 ${flake.anim} ${flake.opacity}`}
          style={{ left: flake.left }}
        >
          <div className={flake.sway}>
            <SnowflakeSvg
              variant={flake.variant}
              className={`${flake.size} ${flake.color} filter ${flake.glow}`}
            />
          </div>
        </div>
      ))}

      {/* Click frost crystal burst */}
      {clickFlakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snow-burst"
          style={{ left: flake.x - 14, top: flake.y - 14 }}
        >
          <SnowflakeSvg
            variant="crystal"
            className="w-7 h-7 text-cyan-200 filter drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          />
        </div>
      ))}
    </div>
  );
}

function SnowflakeSvg({ variant = 'crystal', className = '' }) {
  if (variant === 'dot') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="5" fillOpacity="0.85" />
        <circle cx="12" cy="12" r="9" fillOpacity="0.25" />
      </svg>
    );
  }

  if (variant === 'star') {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2V30M2 16H30M6.1 6.1L25.9 25.9M25.9 6.1L6.1 25.9"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="2.2" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  // Detailed hexagonal cyber-crystal snowflake
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Main 6-axis crystalline branches */}
      <path
        d="M20 3V37M5.28 11.5L34.72 28.5M34.72 11.5L5.28 28.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Outer chevrons */}
      <path
        d="M16.5 6.5L20 9.5L23.5 6.5M16.5 33.5L20 30.5L23.5 33.5M7.2 15.8L11.5 15.1L10.7 10.8M32.8 24.2L28.5 24.9L29.3 29.2M29.3 10.8L28.5 15.1L32.8 15.8M10.7 29.2L11.5 24.9L7.2 24.2"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner hexagonal core */}
      <polygon
        points="20,14 25.2,17 25.2,23 20,26 14.8,23 14.8,17"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </svg>
  );
}
