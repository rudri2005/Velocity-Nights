import { Flame, Instagram, Youtube, Twitter, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-carbon-950 border-t border-carbon-800/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Flame className="w-7 h-7 text-primary-500" />
              <span className="font-display text-2xl tracking-wider text-white">
                VELOCITY<span className="text-primary-500">NIGHTS</span>
              </span>
            </div>
            <p className="text-carbon-400 text-sm leading-relaxed max-w-xs">
              The world's most dangerous underground street racing championship. Three nights, one champion.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 glass flex items-center justify-center rounded-sm hover:border-primary-500/50 hover:text-primary-400 text-carbon-400 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-carbon-500 mb-4">EVENT</h4>
            <ul className="space-y-3">
              {['The Event', 'Categories', 'Schedule', 'Gallery', 'Register'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-carbon-300 hover:text-primary-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-carbon-500 mb-4">INFORMATION</h4>
            <ul className="space-y-3">
              {['Rules & Regulations', 'Safety Requirements', 'Prize Structure', 'Spectator Guide', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-carbon-300 hover:text-primary-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-carbon-500 mb-4">LOCATION</h4>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="w-4 h-4 text-primary-400 mt-0.5" />
              <div>
                <p className="text-carbon-300 text-sm">Neo Harbour Docks</p>
                <p className="text-carbon-400 text-sm">Pier 7 Industrial Zone</p>
                <p className="text-carbon-400 text-sm">Mar 14-16, 2026</p>
              </div>
            </div>
            <div className="glass p-4 rounded-sm mt-4">
              <div className="font-mono text-[10px] tracking-widest text-carbon-500 mb-1">EMERGENCY LINE</div>
              <div className="font-mono text-sm text-white">+1 (555) RACE-911</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-carbon-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.2em] text-carbon-500">
            © 2026 VELOCITY NIGHTS — ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-carbon-500">
            PROFESSIONAL CLOSED-COURSE EVENT · STREET RACING IS ILLEGAL ON PUBLIC ROADS
          </p>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />
    </footer>
  );
}
