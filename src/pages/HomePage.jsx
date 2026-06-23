import { useState, useEffect, useRef } from 'react';
import milestones from '../milestones';
import { useAudio } from '../context/AudioContext';
import Navbar from '../components/Navbar';
import {
  TimelineItem,
  PhotoModal,
  ScatteredPhotos,
  MemoryCounter,
  MusicPlayer,
  LoveLetter,
} from '../components';

const START_DATE = new Date('2024-09-04T00:00:00');


export default function HomePage() {
  const alreadySeen = sessionStorage.getItem('intro-seen');
  const [loading, setLoading] = useState(!alreadySeen);
  const [showLetter, setShowLetter] = useState(false);
  const [showMain, setShowMain] = useState(!!alreadySeen);
  const [progress, setProgress] = useState(0);
  const { play } = useAudio();
  const [timeStats, setTimeStats] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0, months: 0, years: 0
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scatteredRef = useRef(null);
  const heroContentRef = useRef(null);
  const rafRef = useRef(null);

  const handleImageClick = (milestone) => {
    setCurrentImageIndex(milestones.findIndex(m => m.id === milestone.id));
    setModalOpen(true);
  };

  // Direct DOM scroll handler — no React re-renders on scroll
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

  // Time counter
  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = now - START_DATE;
      const s = Math.floor(diff / 1000);
      const m = Math.floor(s / 60);
      const h = Math.floor(m / 60);
      const d = Math.floor(h / 24);
      let years = now.getFullYear() - START_DATE.getFullYear();
      let months = now.getMonth() - START_DATE.getMonth();
      if (months < 0) { years--; months += 12; }
      setTimeStats({ days: d, hours: h % 24, minutes: m % 60, seconds: s % 60, months: years * 12 + months, years });
    };
    calc();
    const iv = setInterval(calc, 1000);
    return () => clearInterval(iv);
  }, []);

  // Loading bar — skip if already seen this session
  useEffect(() => {
    if (alreadySeen) return;
    const iv = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(iv);
          setTimeout(() => { setLoading(false); setShowLetter(true); }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(iv);
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
            <div className="heart" />
            <div className="heart-pulse" />
          </div>
          <h2 className="loading-text">Loading...</h2>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <p className="progress-text">{progress}%</p>
        </div>
      </div>
    );
  }

  if (showLetter) {
    return (
      <LoveLetter
        onComplete={() => { sessionStorage.setItem('intro-seen', '1'); setShowLetter(false); setShowMain(true); }}
        onPlayMusic={play}
      />
    );
  }

  if (!showMain) return null;

  return (
    <div className="page">
      <Navbar />
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
          <MusicPlayer />
          <div className="scroll-indicator">Space to explore</div>
          <div className="swipe-indicator">Swipe to explore</div>
        </div>
      </section>

      <main className="timeline">
        <h1 className="timeline-title">Our Milestone</h1>
        <div className="timeline-items">
          {milestones.map(m => (
            <TimelineItem key={m.id} milestone={m} onImageClick={handleImageClick} />
          ))}
        </div>
      </main>

      <footer className="apple-footer">
        <div className="footer-card">
          <span className="footer-text">Crafting Memories</span>
          <span className="wave-dots">
            <span className="dot" /><span className="dot" /><span className="dot" />
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
