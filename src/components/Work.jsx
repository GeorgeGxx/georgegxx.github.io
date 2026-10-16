import { useState, useRef, useEffect } from 'react';
import { projects, categories } from '../data/projects';

export default function Work({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('*');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselRef = useRef(null);

  const filteredProjects = activeFilter === '*'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const card = carouselRef.current.querySelector('article');
    if (card) {
      const cardWidth = card.offsetWidth + 20; // width + gap
      const newIndex = Math.min(
        Math.round(scrollLeft / cardWidth),
        filteredProjects.length - 1
      );
      setActiveIndex(Math.max(0, newIndex));
    }
  };

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const card = container.querySelector('article');
    const scrollAmount = card ? card.offsetWidth + 24 : 350;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cards = container.querySelectorAll('article');
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
    setActiveIndex(0);
    setCanScrollLeft(false);
    setCanScrollRight(filteredProjects.length > 1);
  }, [activeFilter, filteredProjects.length]);

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [filteredProjects]);

  return (
    <section className="py-16 sm:py-24 relative" id="work">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Carousel Arrow Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-10">
          <div>
            <p className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-2">// 03 · work</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Selected architecture &amp; projects
            </h2>
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous project"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] disabled:opacity-25 disabled:pointer-events-none flex items-center justify-center transition-all duration-200 cursor-pointer font-bold text-sm"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next project"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] disabled:opacity-25 disabled:pointer-events-none flex items-center justify-center transition-all duration-200 cursor-pointer font-bold text-sm"
            >
              →
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs transition-all duration-200 cursor-pointer ${
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

        {/* Projects Carousel */}
        <div>
          <div
            ref={carouselRef}
            onScroll={updateScrollState}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={onSelectProject}
                className="w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
              />
            ))}
          </div>

          {/* Centered Pagination Dots */}
          <div className="mt-6 sm:mt-8 flex justify-center items-center gap-1.5">
            {filteredProjects.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? 'w-7 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]'
                    : 'w-2 bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, onSelectProject, className = '' }) {
  return (
    <article
      className={`group rounded-xl sm:rounded-2xl overflow-hidden bg-[#0d141d]/90 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 sm:hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(34,211,238,0.1)] flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Diagram Trigger Image */}
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="w-full aspect-[16/10] overflow-hidden bg-slate-950 block relative cursor-pointer sm:cursor-zoom-in text-left"
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
          
          {/* Discreet zoom indicator */}
          <span className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 p-1.5 sm:px-2.5 sm:py-1 rounded-full sm:rounded-md bg-slate-950/70 sm:bg-slate-950/85 backdrop-blur-md text-cyan-300 border border-slate-700/60 flex items-center gap-1.5 shadow-sm transition-all duration-200 sm:opacity-0 sm:group-hover:opacity-100">
            <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            <span className="hidden sm:inline font-mono text-[10px]">View diagram</span>
          </span>
        </button>

        {/* Body Content */}
        <div className="p-4 sm:p-6">
          <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1.5 sm:mb-2">
            {project.categoryLabel}
          </span>

          <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            {project.desc}
          </p>
        </div>
      </div>

      {/* Tags Footer */}
      <div className="px-4 pb-4 pt-2.5 sm:px-6 sm:pb-6 sm:pt-2 border-t border-slate-800/40 flex flex-wrap gap-1.5">
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
  );
}
