import { useState, useEffect } from 'react';

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax-layer layer-1"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className="parallax-layer layer-2"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className="parallax-layer layer-3"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
    </div>
  );
};

export default ParallaxBackground;
