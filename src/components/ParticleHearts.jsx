import { useState, useEffect, useRef } from 'react';

const ParticleHearts = () => {
  const [particles, setParticles] = useState([]);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const nextId = useRef(0);

  // Generate initial floating hearts
  useEffect(() => {
    const hearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 20 + Math.random() * 30,
      emoji: ['💕', '💝', '❤️', '💖', '💗'][Math.floor(Math.random() * 5)]
    }));
    setFloatingHearts(hearts);
  }, []);

  const createBurst = (x, y) => {
    const burstParticles = Array.from({ length: 12 }, () => ({
      id: nextId.current++,
      x,
      y,
      angle: Math.random() * Math.PI * 2,
      velocity: 2 + Math.random() * 3,
      emoji: ['💕', '💝', '❤️', '💖', '💗'][Math.floor(Math.random() * 5)],
      size: 15 + Math.random() * 15
    }));

    setParticles(prev => [...prev, ...burstParticles]);

    setTimeout(() => {
      setParticles(prev => prev.filter(p => !burstParticles.find(bp => bp.id === p.id)));
    }, 2000);
  };

  // Handle clicks at document level so page content remains clickable
  useEffect(() => {
    const handleClick = (e) => {
      createBurst(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="particle-hearts-container">
      {/* Floating background hearts */}
      {floatingHearts.map(heart => (
        <div
          key={heart.id}
          className="floating-particle-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`
          }}
        >
          {heart.emoji}
        </div>
      ))}

      {/* Burst particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="burst-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            fontSize: `${particle.size}px`,
            '--angle': `${particle.angle}rad`,
            '--velocity': particle.velocity
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};

export default ParticleHearts;
