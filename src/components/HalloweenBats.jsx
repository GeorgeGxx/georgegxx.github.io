import { useState, useEffect } from 'react';

export default function HalloweenBats() {
  const [clickBats, setClickBats] = useState([]);

  // Easter egg: Spawns a startled mini-bat when clicking anywhere on empty page background
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (target.closest('button, a, input, textarea, select')) return;

      const newBat = {
        id: `${Date.now()}-${Math.random()}`,
        x: e.clientX,
        y: e.clientY
      };

      setClickBats((prev) => [...prev.slice(-3), newBat]);

      setTimeout(() => {
        setClickBats((prev) => prev.filter((b) => b.id !== newBat.id));
      }, 1600);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden select-none" aria-hidden="true">
          {/* Ambient Bat 1 - Hunter bat */}
          <div className="absolute top-0 left-0 animate-bat-flight-1">
            <BatSvg className="w-12 h-6 text-slate-900 filter drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
          </div>

          {/* Ambient Bat 2 - Neon cyan rim glow */}
          <div className="absolute top-0 left-0 animate-bat-flight-2">
            <BatSvg className="w-14 h-7 text-slate-900 filter drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]" isFast eyeColor="#22d3ee" accentColor="rgba(34, 211, 238, 0.55)" />
          </div>

          {/* Ambient Bat 3 - Distant high altitude soaring */}
          <div className="absolute top-0 left-0 animate-bat-flight-3 opacity-75">
            <BatSvg className="w-8 h-4 text-slate-950 filter drop-shadow-[0_0_5px_rgba(249,115,22,0.25)]" accentColor="rgba(249, 115, 22, 0.35)" />
          </div>

          {/* Ambient Bat 4 - Swooping dive */}
          <div className="absolute top-0 left-0 animate-bat-flight-4">
            <BatSvg className="w-11 h-5.5 text-slate-900 filter drop-shadow-[0_0_9px_rgba(249,115,22,0.4)]" isFast />
          </div>

          {/* Ambient Bat 5 - Fluttering follower */}
          <div className="absolute top-0 left-0 animate-bat-flight-1-delayed opacity-85">
            <BatSvg className="w-10 h-5 text-slate-900 filter drop-shadow-[0_0_7px_rgba(34,211,238,0.3)]" eyeColor="#22d3ee" accentColor="rgba(34, 211, 238, 0.45)" />
          </div>

          {/* Click startled bats */}
          {clickBats.map((bat) => (
            <div
              key={bat.id}
              className="absolute animate-bat-scatter"
              style={{ left: bat.x - 24, top: bat.y - 12 }}
            >
              <BatSvg className="w-12 h-6 text-slate-900 filter drop-shadow-[0_0_14px_rgba(249,115,22,0.7)]" isFast />
            </div>
          ))}
    </div>
  );
}

function BatSvg({ className = '', eyeColor = '#f97316', accentColor = 'rgba(34, 211, 238, 0.4)', isFast = false }) {
  const leftWingClass = isFast ? 'animate-wing-left-fast' : 'animate-wing-left';
  const rightWingClass = isFast ? 'animate-wing-right-fast' : 'animate-wing-right';

  return (
    <svg
      viewBox="0 0 100 52"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Wing Group - Pivots smoothly from shoulder */}
      <g className={leftWingClass}>
        <path
          d="M 44 16 C 35 13, 24 9, 21 7 C 20 6, 19 8, 20 10 C 15 14, 7 19, 0 25 C 6 27, 13 30, 16 35 C 20 30, 27 31, 31 38 C 35 32, 42 33, 44 30 Z"
        />
        {/* Left Wing Bone Filaments */}
        <path
          d="M 44 16 C 30 18, 20 10, 20 10 M 20 10 C 10 18, 5 22, 0 25 M 20 10 C 18 22, 16 35, 16 35 M 20 10 C 25 24, 31 38, 31 38"
          fill="none"
          stroke={accentColor}
          strokeWidth="0.75"
          strokeLinecap="round"
        />
      </g>

      {/* Right Wing Group - Pivots smoothly from shoulder */}
      <g className={rightWingClass}>
        <path
          d="M 56 16 C 65 13, 76 9, 79 7 C 80 6, 81 8, 80 10 C 85 14, 93 19, 100 25 C 94 27, 87 30, 84 35 C 80 30, 73 31, 69 38 C 65 32, 58 33, 56 30 Z"
        />
        {/* Right Wing Bone Filaments */}
        <path
          d="M 56 16 C 70 18, 80 10, 80 10 M 80 10 C 90 18, 95 22, 100 25 M 80 10 C 82 22, 84 35, 84 35 M 80 10 C 75 24, 69 38, 69 38"
          fill="none"
          stroke={accentColor}
          strokeWidth="0.75"
          strokeLinecap="round"
        />
      </g>

      {/* Stable Central Body (Head, Ears, Eyes, Torso, Tail) */}
      <g className="animate-bat-body">
        <path
          d="M 50 16 C 48 12, 45 6, 43 7 C 42 8, 46 13, 44 16 C 44 22, 45 32, 50 42 C 55 32, 56 22, 56 16 C 54 13, 58 8, 57 7 C 55 6, 52 12, 50 16 Z"
        />
        {/* Glowing atmospheric eyes */}
        <circle cx="48" cy="18" r="1.15" fill={eyeColor} />
        <circle cx="52" cy="18" r="1.15" fill={eyeColor} />
      </g>
    </svg>
  );
}
