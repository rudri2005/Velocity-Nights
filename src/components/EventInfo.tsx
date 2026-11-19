import { useReveal, useCountdown, useParallaxScroll } from '@/hooks/useScroll';
import { IMAGES, STATS } from '@/data/constants';
import { Flame, Users, Gauge, DollarSign, TrendingUp } from 'lucide-react';

const ICONS: Record<string, typeof Flame> = {
  'REGISTERED DRIVERS': Users,
  'TOTAL HORSEPOWER': Gauge,
  'PRIZE POOL': DollarSign,
  'ATTENDEES': TrendingUp,
};

export default function EventInfo() {
  const { ref: revealRef, visible } = useReveal<HTMLDivElement>();
  const { ref: parallaxRef, offset } = useParallaxScroll<HTMLDivElement>(-0.15);

  const targetDate = new Date('2026-03-14T18:00:00');
  const countdown = useCountdown(targetDate);

  const timeUnits = [
    { label: 'DAYS', value: countdown.days },
    { label: 'HOURS', value: countdown.hours },
    { label: 'MINUTES', value: countdown.minutes },
    { label: 'SECONDS', value: countdown.seconds },
  ];

  return (
    <section id="event" className="relative py-32 bg-carbon-950 overflow-hidden">
      {/* Parallax background image */}
      <div ref={parallaxRef} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${IMAGES.heroNight})`,
            transform: `translateY(${offset}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950 via-carbon-950/80 to-carbon-950" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10" ref={revealRef}>
        {/* Section header */}
        <div className={`mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-3 mb-4">
            <Flame className="w-5 h-5 text-primary-500" />
            <span className="font-mono text-xs tracking-[0.4em] text-primary-400">01 / THE EVENT</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] max-w-4xl">
            WHERE ENGINES<br />
            <span className="text-gradient-fire">BECOME LEGENDS</span>
          </h2>
          <p className="mt-6 text-carbon-300 text-lg max-w-2xl leading-relaxed">
            Three nights. Nine events. One hundred and twenty-seven drivers from across the globe,
            all chasing the same thing — to be crowned King of the Street at the world's most
            dangerous underground racing championship.
          </p>
        </div>

        {/* Countdown */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs tracking-[0.4em] text-accent-400">COUNTDOWN TO IGNITION</span>
            <div className="h-px flex-1 bg-gradient-to-r from-accent-500/50 to-transparent" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="glass rounded-sm p-6 md:p-8 text-center relative group hover:border-primary-500/60 transition-colors clip-slant"
              >
                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/5 transition-colors" />
                <div className="font-display text-6xl md:text-8xl text-white tabular-nums leading-none">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-carbon-400 mt-3">
                  {unit.label}
                </div>
                {unit.label === 'SECONDS' && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-500 animate-glow" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {STATS.map((stat, i) => {
            const Icon = ICONS[stat.label] ?? Flame;
            return (
              <div
                key={stat.label}
                className="glass-dark p-6 lg:p-8 relative overflow-hidden group hover:border-primary-600/50 transition-all"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-600/10 rounded-full blur-2xl group-hover:bg-primary-600/20 transition-colors" />
                <Icon className="w-6 h-6 text-primary-400 mb-3" />
                <div className="font-display text-4xl lg:text-5xl text-white leading-none">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-carbon-400 mt-2">
                  {stat.label}
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary-500 group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
