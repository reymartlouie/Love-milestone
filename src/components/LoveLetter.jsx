import { useState, useEffect } from 'react';

const LoveLetter = ({ onComplete, onPlayMusic }) => {
  const [stage, setStage] = useState(0); // 0: initial, 1: message revealed
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();

        if (stage === 0) {
          // First space: reveal message + play music
          setStage(1);
          onPlayMusic?.();
        } else if (stage === 1) {
          // Second space: exit to hero
          setIsExiting(true);
          setTimeout(() => {
            onComplete?.();
          }, 600);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage, onComplete, onPlayMusic]);

  return (
    <div className={`love-letter-screen ${isExiting ? 'fade-out' : ''}`}>
      <div className="love-letter-container">
        <div className="letter-envelope">
          <div className="letter-paper">
            {stage === 0 ? (
              <div className="letter-prompt">
                <div className="letter-icon">💌</div>
                <p>You have a message...</p>
                <div className="space-hint">
                  Press <span className="key">Space</span> to open
                </div>
              </div>
            ) : (
              <div className="letter-message">
                <p className="message-text">
                  Hope this website reach you, I miss you and I love you so much
                </p>
                <div className="message-signature">— With all my heart ❤️</div>
                <div className="space-hint continue">
                  Press <span className="key">Space</span> to continue
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
