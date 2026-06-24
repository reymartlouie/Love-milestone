import { useRef } from 'react';
import { useAudio } from '../context/AudioContext';

const formatTime = (t) => {
  if (!t || isNaN(t)) return '0:00';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

export default function MusicHero() {
  const {
    playlist, currentIndex, track,
    isPlaying, currentTime, duration, volume,
    togglePlay, next, prev, goTo, seekTo, setVolume,
  } = useAudio();

  const progressRef = useRef(null);

  const seek = (e) => {
    if (!progressRef.current || !duration) return;
    const rect = progressRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    seekTo(pct * duration);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section className="music-hero">
      <div className="music-hero-inner">

        {/* FRAME 1 — Now Playing */}
        <div className="music-frame music-frame--player">
          <p className="music-frame-label">Now Playing</p>

          <div className="music-frame-header">
            <p className="music-hero-label">Our Soundtrack</p>
            <h1 className="music-hero-title">Reymart & Keisha</h1>
          </div>

          <div className="music-pulse-wrap">
            {isPlaying && (
              <>
                <div className="pulse-ring pulse-ring-1" />
                <div className="pulse-ring pulse-ring-2" />
                <div className="pulse-ring pulse-ring-3" />
              </>
            )}
            <button
              className={`music-play-btn${isPlaying ? ' playing' : ''}`}
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying
                ? <span className="music-icon-pause">❚❚</span>
                : <span className="music-icon-play">▶</span>
              }
            </button>
          </div>

          <div className="music-track-info">
            <p className="music-track-title">{track.title}</p>
            <p className="music-track-num">{currentIndex + 1} / {playlist.length}</p>
          </div>

          <div className="music-progress-wrap">
            <span className="music-time">{formatTime(currentTime)}</span>
            <div
              ref={progressRef}
              className="music-progress-bar"
              onClick={seek}
              role="slider"
              aria-label="Seek"
              aria-valuenow={Math.round(progress)}
            >
              <div className="music-progress-fill" style={{ width: `${progress}%` }} />
              <div className="music-progress-thumb" style={{ left: `${progress}%` }} />
            </div>
            <span className="music-time">{formatTime(duration)}</span>
          </div>

          <div className="music-controls">
            <button className="music-ctrl-btn" onClick={prev} aria-label="Previous">‹</button>
            <input
              className="music-volume"
              type="range" min="0" max="1" step="0.05"
              value={volume}
              aria-label="Volume"
              onChange={e => setVolume(parseFloat(e.target.value))}
            />
            <button className="music-ctrl-btn" onClick={next} aria-label="Next">›</button>
          </div>
        </div>

        {/* FRAME 2 — Playlist */}
        <div className="music-frame music-frame--playlist">
          <p className="music-frame-label">Playlist</p>
          <ul className="music-playlist">
            {playlist.map((t, i) => (
              <li
                key={i}
                className={`music-playlist-item${i === currentIndex ? ' active' : ''}`}
                onClick={() => goTo(i)}
                role="button"
                tabIndex={0}
              >
                <span className="playlist-num">{i + 1}</span>
                <span className="playlist-name">{t.title}</span>
                {i === currentIndex && isPlaying && <span className="playlist-playing">♪</span>}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
