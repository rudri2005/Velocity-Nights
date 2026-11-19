import { useScrollProgress } from '@/hooks/useScroll';
import { Flame } from 'lucide-react';

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary-600 via-primary-400 to-warning-400 transition-[width] duration-100 ease-out"
        style={{ width: `${progress * 100}%` }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <Flame className="w-4 h-4 text-primary-400 drop-shadow-[0_0_8px_rgba(255,61,32,0.8)]" />
        </div>
      </div>
    </div>
  );
}
