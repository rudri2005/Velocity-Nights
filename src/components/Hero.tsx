import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Flame, Zap, MapPin, Calendar } from 'lucide-react';
import { IMAGES } from '@/data/constants';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (rafId === 0) {
        rafId = requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          rafId = 0;
        });
      }
    };
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseX(x);
      setMouseY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const s = Math.min(scrollY, 1200);
  const fade = Math.max(0, 1 - s / 700);
  const scale = 1 + s / 3000;

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden perspective-2000"
      style={{ opacity: fade }}
    >
      {/* Layer 0: Deep background — city night gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-carbon-950 via-carbon-900 to-carbon-950"
        style={{ transform: `translateY(${s * 0.1}px) scale(${scale})` }}
      />

      {/* Layer 1: Grid floor — deepest parallax */}
      <div
        className="absolute inset-0 bg-grid-fine opacity-40"
        style={{
          transform: `translateY(${s * 0.15}px) translateX(${mouseX * -10}px)`,
          maskImage: 'radial-gradient(ellipse at center bottom, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center bottom, black 30%, transparent 80%)',
        }}
      />

      {/* Layer 2: Main hero image — mid parallax + 3D tilt */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${s * 0.25}px) scale(${1 + s / 2500}) perspective(1200px) rotateX(${mouseY * 3}deg) rotateY(${mouseX * -4}deg)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMAGES.heroMain})`,
            filter: 'brightness(0.5) contrast(1.15) saturate(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/80 via-transparent to-carbon-950/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/60 via-transparent to-transparent" />
      </div>

      {/* Layer 3: Foreground car image — most parallax, floats above */}
      <div
        className="absolute inset-x-0 bottom-0 h-[70%]"
        style={{
          transform: `translateY(${s * -0.05}px) translateX(${mouseX * 20}px)`,
        }}
      >
        <div
          className="w-full h-full bg-contain bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url(${IMAGES.driftColorful})`,
            maskImage: 'linear-gradient(to top, black 0%, transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 90%)',
            filter: 'brightness(0.7) contrast(1.2) saturate(1.3)',
          }}
        />
      </div>

      {/* Layer 4: Speed lines overlay */}
      <div
        className="absolute inset-0 speed-lines opacity-50"
        style={{ transform: `translateX(${s * -0.5}px)` }}
      />

      {/* Layer 5: Red glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-primary-900/30 via-primary-950/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-primary-600/20 blur-[120px] rounded-full" />

      {/* Content */}
      <div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{
          transform: `translateY(${s * 0.5}px) translateX(${mouseX * 8}px)`,
          opacity: fade,
        }}
      >
        {/* Top label */}
        <div
          className="flex items-center gap-3 mb-6 animate-fade-in"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <div className="h-px w-12 bg-primary-500" />
          <span className="font-mono text-xs tracking-[0.4em] text-primary-400">
            UNDERGROUND CHAMPIONSHIP 2026
          </span>
          <div className="h-px w-12 bg-primary-500" />
        </div>

        {/* Main title with 3D */}
        <h1
          className="font-display text-[clamp(3.5rem,14vw,11rem)] leading-[0.85] tracking-tight text-white text-shadow-lg animate-slide-up"
          style={{
            animationDelay: '0.4s',
            opacity: 0,
            transform: `perspective(800px) rotateX(${mouseY * 2}deg) rotateY(${mouseX * -3}deg) translateZ(20px)`,
          }}
        >
          VELOCITY
          <br />
          <span className="text-gradient-fire">NIGHTS</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 font-sans text-base md:text-xl text-carbon-200 max-w-2xl animate-slide-up"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          The most anticipated underground street racing event of the year.
          <span className="text-primary-400 font-bold"> 50+ cars. 4 categories. 1 champion.</span>
        </p>

        {/* Info badges */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <div className="glass px-5 py-3 flex items-center gap-2.5 clip-slant">
            <Calendar className="w-4 h-4 text-primary-400" />
            <span className="font-mono text-xs tracking-widest text-carbon-100">MAR 14-16, 2026</span>
          </div>
          <div className="glass px-5 py-3 flex items-center gap-2.5 clip-slant">
            <MapPin className="w-4 h-4 text-accent-400" />
            <span className="font-mono text-xs tracking-widest text-carbon-100">NEO HARBOUR DOCKS</span>
          </div>
          <div className="glass px-5 py-3 flex items-center gap-2.5 clip-slant">
            <Zap className="w-4 h-4 text-warning-400" />
            <span className="font-mono text-xs tracking-widest text-carbon-100">3 DAYS / 9 EVENTS</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-scale-in"
          style={{ animationDelay: '1s', opacity: 0 }}
        >
          <a
            href="#register"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-display text-xl tracking-wider transition-all clip-slant overflow-hidden"
          >
            <Flame className="w-5 h-5" />
            CLAIM YOUR SPOT
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
          <a
            href="#event"
            className="inline-flex items-center gap-3 px-8 py-4 border border-carbon-600 hover:border-primary-500 text-carbon-200 hover:text-white font-display text-xl tracking-wider transition-all clip-slant"
          >
            EXPLORE EVENT
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{ opacity: fade }}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-carbon-400 animate-pulse-slow">SCROLL TO RACE</span>
        <ChevronDown className="w-5 h-5 text-primary-400 animate-bounce" />
      </div>

      {/* Edge vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 0 200px rgba(0,0,0,0.8)',
      }} />
    </section>
  );
}
