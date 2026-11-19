import { useReveal } from '@/hooks/useScroll';
import { CATEGORIES } from '@/data/constants';
import { Gauge, Wind, Timer, Crown, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, typeof Gauge> = {
  Gauge,
  Wind,
  Timer,
  Crown,
};

export default function Categories() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="categories" className="relative py-32 bg-gradient-to-b from-carbon-950 via-carbon-900 to-carbon-950 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10" ref={ref}>
        <div className={`mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-[0.4em] text-primary-400">03 / THE RACES</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary-500/50 to-transparent" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9]">
            FOUR WAYS TO <span className="text-gradient-fire">RACE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CATEGORIES.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon] ?? Gauge;
            return (
              <div
                key={cat.name}
                className={`group relative h-[400px] overflow-hidden rounded-sm cursor-pointer transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Background */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  style={{ filter: 'brightness(0.4) contrast(1.1) saturate(1.1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/80 to-transparent" />

                {/* Top tag */}
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <div className="w-10 h-10 glass flex items-center justify-center rounded-sm">
                    <Icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-primary-300 bg-primary-950/60 px-3 py-1 rounded-sm">
                    {cat.tag}
                  </span>
                </div>

                {/* Slots badge */}
                <div className="absolute top-5 right-5 glass px-3 py-1.5 rounded-sm">
                  <span className="font-mono text-[10px] tracking-widest text-carbon-300">
                    SLOTS: <span className="text-warning-400 font-bold">{cat.slots}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="font-display text-3xl lg:text-4xl text-white mb-3 leading-tight group-hover:text-primary-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-carbon-300 text-sm leading-relaxed mb-5 max-w-md">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                    <span>ENTER CATEGORY</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 border-2 border-primary-500/0 group-hover:border-primary-500/40 rounded-sm transition-all duration-500" />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary-500 group-hover:w-full transition-all duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
