import { useState, useEffect, useRef } from 'react';
import './styles/index.css';
import milestones from './milestones';

// Components
import {
  ParticleHearts,
  TimelineItem,
  PhotoModal,
  ScatteredPhotos,
  MemoryCounter,
  MusicPlayer,
  LoveLetter,
  MoviesSection
} from './components';

const START_DATE = new Date('2024-09-04T00:00:00');

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showLetter, setShowLetter] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeStats, setTimeStats] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0, months: 0, years: 0
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Refs for direct DOM scroll manipulation — no React re-renders on scroll
  const scatteredRef = useRef(null);
  const heroContentRef = useRef(null);
  const rafRef = useRef(null);

  const handleImageClick = (milestone) => {
    const index = milestones.findIndex(m => m.id === milestone.id);
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  // Direct DOM scroll handler — bypasses React render cycle entirely
  useEffect(() => {
    if (!showMain) return;

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const p = Math.min(window.scrollY / 400, 1);
        const opacity = String(1 - p * 0.8);
        const transform = `scale(${1 - p * 0.1})`;
        const filter = p > 0 ? `blur(${p * 10}px)` : '';

        if (scatteredRef.current) {
          scatteredRef.current.style.opacity = opacity;
          scatteredRef.current.style.transform = transform;
          scatteredRef.current.style.filter = filter;
        }
        if (heroContentRef.current) {
          heroContentRef.current.style.opacity = opacity;
          heroContentRef.current.style.transform = transform;
          heroContentRef.current.style.filter = filter;
        }
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [showMain]);

  // Time together counter
  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now - START_DATE;
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      let years = now.getFullYear() - START_DATE.getFullYear();
      let months = now.getMonth() - START_DATE.getMonth();
      if (months < 0) { years--; months += 12; }
      setTimeStats({
        days, hours: hours % 24, minutes: minutes % 60,
        seconds: seconds % 60, months: years * 12 + months, years
      });
    };
    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Loading animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => { setLoading(false); setShowLetter(true); }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const getSpecialMilestone = () => {
    const { days, months, years } = timeStats;
    if (days === 365 || days === 730 || days === 1095) return `🎊 ${years} Year${years > 1 ? 's' : ''} Together!`;
    if (days === 1000) return '🎉 1000 Days of Love!';
    if (days === 500) return '💫 500 Days Milestone!';
    if (days === 100) return '✨ 100 Days Together!';
    if (months > 0 && months % 6 === 0) return `💝 ${months} Months & Counting!`;
    return null;
  };

  if (loading) {
    return (
      <div className={`loading-screen ${progress === 100 ? 'fade-out' : ''}`}>
        <div className="loading-content">
          <div className="heart-container">
            <div className="heart"></div>
            <div className="heart-pulse"></div>
          </div>
          <h2 className="loading-text">Loading...</h2>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="progress-text">{progress}%</p>
        </div>
      </div>
    );
  }

  if (showLetter) {
    return (
      <LoveLetter
        onComplete={() => { setShowLetter(false); setShowMain(true); }}
        onPlayMusic={() => setShouldPlayMusic(true)}
      />
    );
  }

  if (!showMain) return null;

  return (
    <div className="page">
      <ParticleHearts />

      {/* Hero Section */}
      <section className="hero">
        <div
          ref={scatteredRef}
          className="scattered-photos-wrapper"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        >
          <ScatteredPhotos show={true} />
        </div>

        <div ref={heroContentRef} className="hero-content">
          <h1 className="hero-title">Our Love Story</h1>
          <p className="hero-subtitle">Reymart & Keisha</p>
          <div className="hero-date">2024 — Death</div>

          <MemoryCounter timeStats={timeStats} specialMilestone={getSpecialMilestone()} />

          <MusicPlayer
            playlist={[
              { src: '/audio/Nobody-else.mp3', title: 'Nobody Else' },
              { src: '/audio/tenerif-sea.mp3', title: 'Tenerif Sea' },
              { src: '/audio/ilysb-stripped.mp3', title: 'ILYSB' }
            ]}
            shouldPlay={shouldPlayMusic}
          />

          <div className="scroll-indicator">Space to explore</div>
          <div className="swipe-indicator">Swipe to explore</div>
        </div>
      </section>

      {/* Timeline Section */}
      <main className="timeline">
        <h1 className="timeline-title">Our Milestone</h1>
        <div className="timeline-items">
          {milestones.map(m => (
            <TimelineItem key={m.id} milestone={m} onImageClick={handleImageClick} />
          ))}
        </div>
      </main>

      <MoviesSection />

      <footer className="apple-footer">
        <div className="footer-card">
          <span className="footer-text">Crafting Memories</span>
          <span className="wave-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </span>
        </div>
      </footer>

      <PhotoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        milestones={milestones}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </div>
  );
}
