import { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const NAV_LINKS = [
  { label: 'EVENT', href: '#event' },
  { label: 'RACERS', href: '#racers' },
  { label: 'CATEGORIES', href: '#categories' },
  { label: 'SCHEDULE', href: '#schedule' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'REGISTER', href: '#register' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-carbon-950/90 backdrop-blur-xl border-b border-carbon-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-600 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
            <Flame className="relative w-7 h-7 text-primary-500" />
          </div>
          <span className="font-display text-2xl tracking-wider text-white">
            VELOCITY<span className="text-primary-500">NIGHTS</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-[0.2em] text-carbon-300 hover:text-primary-400 transition-colors neon-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#register"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-mono text-xs tracking-widest font-bold rounded-sm transition-all hover:shadow-[0_0_20px_rgba(255,61,32,0.5)] clip-slant"
        >
          GET TICKETS
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-carbon-950/95 backdrop-blur-xl border-b border-carbon-800/60 animate-fade-in">
          <div className="flex flex-col gap-4 p-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm tracking-[0.2em] text-carbon-300 hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-600 text-white font-mono text-xs tracking-widest font-bold rounded-sm mt-2"
            >
              GET TICKETS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
