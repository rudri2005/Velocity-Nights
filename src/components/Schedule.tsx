import { useReveal } from '@/hooks/useScroll';
import { SCHEDULE } from '@/data/constants';
import { Clock, Calendar } from 'lucide-react';

export default function Schedule() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const days = ['FRI', 'SAT', 'SUN'];
  const dayLabels: Record<string, string> = {
    FRI: 'FRIDAY · MAR 14',
    SAT: 'SATURDAY · MAR 15',
    SUN: 'SUNDAY · MAR 16',
  };

  return (
    <section id="schedule" className="relative py-32 bg-carbon-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-fine opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-900/15 blur-[150px] rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        <div className={`mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-primary-500" />
            <span className="font-mono text-xs tracking-[0.4em] text-primary-400">04 / THE SCHEDULE</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9]">
            THREE DAYS OF<br />
            <span className="text-gradient-fire">PURE ADRENALINE</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[60px] md:left-[120px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-900/60 to-transparent" />

          {days.map((day) => (
            <div key={day} className="mb-12">
              {/* Day header */}
              <div
                className={`flex items-center gap-6 mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              >
                <div className="w-[120px] md:w-[240px] flex items-center justify-end pr-6">
                  <div className="text-right">
                    <div className="font-display text-3xl md:text-4xl text-primary-400">{day}</div>
                    <div className="font-mono text-[10px] tracking-[0.2em] text-carbon-500">{dayLabels[day]}</div>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 rounded-full bg-primary-600 border-4 border-carbon-950 shadow-[0_0_15px_rgba(255,61,32,0.6)]" />
                </div>
              </div>

              {/* Events for this day */}
              {SCHEDULE.filter((s) => s.day === day).map((event, i) => (
                <div
                  key={`${event.title}-${i}`}
                  className={`flex items-center gap-6 group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-[120px] md:w-[240px] flex items-center justify-end pr-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-carbon-500" />
                      <span className="font-mono text-sm text-carbon-300 tabular-nums">{event.time}</span>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-2 h-2 rounded-full bg-carbon-600 group-hover:bg-primary-500 transition-colors" />
                  </div>
                  <div className="flex-1 py-3 px-5 glass-dark rounded-sm group-hover:border-primary-500/40 transition-colors">
                    <span className="text-sm md:text-base text-carbon-100 group-hover:text-white transition-colors">
                      {event.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
