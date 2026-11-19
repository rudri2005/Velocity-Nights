import { useReveal } from '@/hooks/useScroll';
import { GALLERY } from '@/data/constants';
import { Camera } from 'lucide-react';

export default function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const sizeClass: Record<string, string> = {
    lg: 'md:col-span-2 md:row-span-2',
    md: 'md:col-span-1 md:row-span-2',
    sm: 'md:col-span-1 md:row-span-1',
  };

  const heightClass: Record<string, string> = {
    lg: 'h-[300px] md:h-full',
    md: 'h-[300px] md:h-full',
    sm: 'h-[200px] md:h-full',
  };

  return (
    <section id="gallery" className="relative py-32 bg-gradient-to-b from-carbon-950 to-carbon-900 overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10" ref={ref}>
        <div className={`mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-5 h-5 text-primary-500" />
            <span className="font-mono text-xs tracking-[0.4em] text-primary-400">05 / THE MOMENTS</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary-500/50 to-transparent" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9]">
            CAUGHT IN THE<br />
            <span className="text-gradient-fire">HEADLIGHTS</span>
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          {GALLERY.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-sm ${sizeClass[item.size]} ${heightClass[item.size]} transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: 'brightness(0.6) contrast(1.1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/90">
                  {item.label}
                </span>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-primary-500/0 group-hover:border-primary-500/30 rounded-sm transition-all duration-500" />

              {/* Scanline effect on hover */}
              <div className="absolute inset-x-0 h-20 bg-gradient-to-b from-primary-400/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scanline transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
