import { useReveal, useParallaxScroll } from '@/hooks/useScroll';
import { IMAGES } from '@/data/constants';
import { useState } from 'react';
import { Flame, Check, ArrowRight } from 'lucide-react';

export default function Register() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { ref: bgRef, offset } = useParallaxScroll<HTMLDivElement>(-0.2);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="register" className="relative py-32 overflow-hidden">
      {/* Parallax background */}
      <div ref={bgRef} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMAGES.drift1})`,
            transform: `translateY(${offset}px) scale(1.1)`,
            filter: 'brightness(0.3) contrast(1.2) saturate(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950 via-carbon-950/70 to-carbon-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-950 via-transparent to-carbon-950" />
      </div>

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-600/20 blur-[150px] rounded-full" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10" ref={ref}>
        <div className={`text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary-500" />
            <span className="font-mono text-xs tracking-[0.4em] text-primary-400">06 / JOIN THE GRID</span>
            <div className="h-px w-12 bg-primary-500" />
          </div>

          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-[0.85] text-shadow-lg">
            READY TO<br />
            <span className="text-gradient-fire">RACE?</span>
          </h2>

          <p className="mt-8 text-carbon-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Registration closes when the slots fill. Secure your place on the grid before
            it's too late. Only the fastest need apply.
          </p>

          {/* Register form */}
          <div className="mt-12 max-w-xl mx-auto">
            {submitted ? (
              <div className="glass-dark p-8 rounded-sm border-success-500/40 flex flex-col items-center gap-4 animate-scale-in">
                <div className="w-14 h-14 rounded-full bg-success-500/20 flex items-center justify-center">
                  <Check className="w-7 h-7 text-success-400" />
                </div>
                <h3 className="font-display text-3xl text-white">YOU'RE ON THE LIST</h3>
                <p className="text-carbon-300 text-sm">
                  Check your inbox for confirmation and event details. See you at the starting line.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL"
                  className="flex-1 px-6 py-4 bg-carbon-900/80 border border-carbon-700 focus:border-primary-500 text-white font-mono text-sm tracking-wider placeholder:text-carbon-500 outline-none transition-colors clip-slant"
                />
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-display text-xl tracking-wider transition-all clip-slant overflow-hidden whitespace-nowrap"
                >
                  <Flame className="w-5 h-5" />
                  REGISTER NOW
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </form>
            )}
          </div>

          {/* Small print */}
          <p className="mt-6 font-mono text-[10px] tracking-[0.2em] text-carbon-500">
            BY REGISTERING YOU CONFIRM YOU ARE 18+ AND ACCEPT THE EVENT TERMS
          </p>
        </div>
      </div>
    </section>
  );
}
