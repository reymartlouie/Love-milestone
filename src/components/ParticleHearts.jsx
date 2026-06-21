import { useState, useEffect, useRef } from 'react';

const ParticleHearts = () => {
  const [particles, setParticles] = useState([]);
  const nextId = useRef(0);

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

  useEffect(() => {
    const handleClick = (e) => createBurst(e.clientX, e.clientY);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="particle-hearts-container">
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
