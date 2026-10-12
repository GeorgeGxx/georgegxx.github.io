import { useState } from 'react';
import { projects, categories } from '../data/projects';

export default function Work({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('*');

  const filteredProjects = activeFilter === '*'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 relative" id="work">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <p className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-2">// 03 · work</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected architecture &amp; projects
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)] scale-105'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-[#0d141d]/90 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(34,211,238,0.1)] flex flex-col justify-between"
            >
              <div>
                {/* Diagram Trigger Image */}
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="w-full aspect-[16/10] overflow-hidden bg-slate-950 block relative cursor-zoom-in"
                  title="Click to view full architecture diagram"
                >
                  <img
                    src={project.image}
                    alt={project.caption}
                    loading="lazy"
                    width="600"
                    height="375"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                  
                  {/* Zoom hint badge */}
                  <span className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-[#070a0e]/85 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-slate-700/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    🔍 View diagram
                  </span>
                </button>

                {/* Body Content */}
                <div className="p-6">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-2">
                    {project.categoryLabel}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/40 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/90 text-slate-400 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
