import ScrollProgressBar from '@/components/ScrollProgressBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventInfo from '@/components/EventInfo';
import Racers from '@/components/Racers';
import Categories from '@/components/Categories';
import Schedule from '@/components/Schedule';
import Gallery from '@/components/Gallery';
import Register from '@/components/Register';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-carbon-950 text-carbon-100 overflow-x-hidden">
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <EventInfo />
        <Racers />
        <Categories />
        <Schedule />
        <Gallery />
        <Register />
      </main>
      <Footer />
    </div>
  );
}
