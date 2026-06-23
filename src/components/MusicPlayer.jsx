import { useState } from 'react';
import { useAudio } from '../context/AudioContext';

const MusicPlayer = () => {
  const { track, isPlaying, volume, togglePlay, setVolume } = useAudio();
  const [showVolume, setShowVolume] = useState(false);

  return (
    <div className="music-player">
      <audio style={{ display: 'none' }} />

      <div className="player-section player-title-section">
        <span className="player-title">{track.title}</span>
      </div>

      <div className="player-section player-control-section">
        <button
          className={`player-btn play-btn ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
      </div>

      <div className="player-section player-volume-section">
        <button
          className={`volume-toggle ${volume === 0 ? 'muted' : ''}`}
          onClick={() => setShowVolume(v => !v)}
          aria-label="Toggle volume"
        >
          <svg className="volume-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 5L6 9H2v6h4l5 4V5z"/>
            {volume > 0 && (
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            )}
            {volume >= 0.5 && (
              <path d="M18.07 5.93a9 9 0 0 1 0 12.14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            )}
            {volume === 0 && (
              <path d="M16 9l6 6m0-6l-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            )}
          </svg>
        </button>
        <div className={`volume-slider ${showVolume ? 'show' : ''}`}>
          <input
            type="range" min="0" max="1" step="0.1"
            value={volume}
            onChange={e => setVolume(parseFloat(e.target.value))}
            aria-label="Volume"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
