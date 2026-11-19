import { useReveal } from '@/hooks/useScroll';
import { RACERS } from '@/data/constants';
import { useMousePosition } from '@/hooks/useScroll';
import { Trophy, Zap, MapPin, Quote } from 'lucide-react';
import { useState } from 'react';

function RacerCard({ racer, index }: { racer: typeof RACERS[number]; index: number }) {
  const { ref, pos, onMouseMove, onMouseLeave } = useMousePosition<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);

  const rotateX = (pos.y - 0.5) * -16;
  const rotateY = (pos.x - 0.5) * 16;

  const accentColors: Record<string, string> = {
    primary: 'text-primary-400 border-primary-500/40',
    accent: 'text-accent-400 border-accent-500/40',
    warning: 'text-warning-400 border-warning-500/40',
  };
  const accentBg: Record<string, string> = {
    primary: 'from-primary-900/40',
    accent: 'from-accent-900/40',
    warning: 'from-warning-900/40',
  };

  return (
    <div
      ref={ref}
      onMouseMove={(e) => { onMouseMove(e.nativeEvent); setHovered(true); }}
      onMouseLeave={() => { onMouseLeave(); setHovered(false); }}
      className="relative perspective-1000 group"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className="preserve-3d transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${hovered ? 1.03 : 1})`,
        }}
      >
        {/* Card */}
        <div className={`glass-dark border ${accentColors[racer.accent]} rounded-sm overflow-hidden relative`}>
          {/* Background image */}
          <div className="relative h-[500px] overflow-hidden">
            <img
              src={racer.image}
              alt={racer.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ filter: 'brightness(0.7) contrast(1.1)' }}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${accentBg[racer.accent]} via-carbon-950/60 to-transparent`} />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-transparent" />

            {/* Floating accent badge */}
            <div
              className="absolute top-5 right-5 glass px-3 py-1.5 backface-hidden"
              style={{ transform: 'translateZ(60px)' }}
            >
              <span className="font-mono text-[10px] tracking-widest text-white">
                #{String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Quote on hover */}
            <div
              className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="glass-dark p-6 max-w-xs" style={{ transform: 'translateZ(80px)' }}>
                <Quote className="w-5 h-5 text-primary-400 mb-3" />
                <p className="font-sans italic text-sm text-carbon-100 leading-relaxed">
                  "{racer.quote}"
                </p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="p-6 lg:p-7 space-y-4" style={{ transform: 'translateZ(30px)' }}>
            <div>
              <div className={`font-mono text-[10px] tracking-[0.3em] ${accentColors[racer.accent].split(' ')[0]} mb-1`}>
                "{racer.alias}"
              </div>
              <h3 className="font-display text-2xl lg:text-3xl text-white leading-tight">
                {racer.name}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Zap className={`w-3.5 h-3.5 ${accentColors[racer.accent].split(' ')[0]}`} />
                <div>
                  <div className="font-mono text-[9px] tracking-widest text-carbon-500">CAR</div>
                  <div className="text-xs text-carbon-200 font-medium">{racer.car}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className={`w-3.5 h-3.5 ${accentColors[racer.accent].split(' ')[0]}`} />
                <div>
                  <div className="font-mono text-[9px] tracking-widest text-carbon-500">WINS</div>
                  <div className="text-xs text-carbon-200 font-medium">{racer.wins}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-carbon-800">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-carbon-500" />
                <span className="font-mono text-[10px] tracking-widest text-carbon-400">{racer.country}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[10px] tracking-widest text-carbon-500">PWR</span>
                <span className={`font-display text-lg ${accentColors[racer.accent].split(' ')[0]}`}>{racer.power}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Racers() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="racers" className="relative py-32 bg-carbon-950 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-900/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-900/20 blur-[150px] rounded-full" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10" ref={ref}>
        <div className={`mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-[0.4em] text-primary-400">02 / THE DRIVERS</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary-500/50 to-transparent" />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9]">
              THE <span className="text-gradient-fire">CONTENDERS</span>
            </h2>
            <p className="text-carbon-300 text-lg max-w-md">
              Three legends. Three machines. Only one walks away with the crown.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {RACERS.map((racer, i) => (
            <div
              key={racer.name}
              className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <RacerCard racer={racer} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
