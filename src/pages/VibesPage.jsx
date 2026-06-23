import Navbar from '../components/Navbar';
import MusicHero from '../components/MusicHero';
import MoviesSection from '../components/MoviesSection';

export default function VibesPage() {
  return (
    <div className="vibes-page">
      <Navbar />
      <MusicHero />
      <MoviesSection />
    </div>
  );
}
