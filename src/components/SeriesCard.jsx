import useIntersectionObserver from '../hooks/useIntersectionObserver';

const GENRE_COLORS = {
  Romance:  { bg: 'rgba(255, 100, 130, 0.15)', text: '#e05070' },
  Drama:    { bg: 'rgba(130, 100, 255, 0.15)', text: '#8060e0' },
  Comedy:   { bg: 'rgba(255, 200, 60,  0.15)', text: '#b08000' },
  Action:   { bg: 'rgba(255, 120, 60,  0.15)', text: '#d05020' },
  Thriller: { bg: 'rgba(80,  80,  80,  0.15)', text: '#606060' },
  Horror:   { bg: 'rgba(180, 40,  40,  0.15)', text: '#c03030' },
  Fantasy:  { bg: 'rgba(60,  160, 220, 0.15)', text: '#2080b0' },
  Animation:{ bg: 'rgba(60,  200, 140, 0.15)', text: '#208060' },
  Default:  { bg: 'rgba(150, 150, 150, 0.15)', text: '#707070' },
};

const STATUS_CONFIG = {
  watching:  { label: 'Watching',  dot: 'watching' },
  completed: { label: 'Completed', dot: 'completed' },
  dropped:   { label: 'Dropped',   dot: 'dropped' },
};

function HeartRating({ rating }) {
  return (
    <div className="movie-rating" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'heart filled' : 'heart empty'}>
          {i < rating ? '♥' : '♡'}
        </span>
      ))}
    </div>
  );
}

export default function SeriesCard({ show, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const genre = GENRE_COLORS[show.genre] || GENRE_COLORS.Default;
  const status = STATUS_CONFIG[show.status] || STATUS_CONFIG.watching;

  return (
    <div
      ref={ref}
      className={`movie-card ${isVisible ? 'show' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="movie-poster-area">
        {show.poster ? (
          <img src={show.poster} alt={show.title} loading="lazy" className="movie-poster-img" />
        ) : (
          <div className="movie-poster-placeholder">
            <span className="movie-poster-icon">📺</span>
          </div>
        )}
        <div className="movie-year-badge">{show.year}</div>
      </div>

      <div className="movie-info">
        <div className="movie-header">
          <h3 className="movie-title">{show.title}</h3>
          <span className="movie-genre" style={{ background: genre.bg, color: genre.text }}>
            {show.genre}
          </span>
        </div>

        <HeartRating rating={show.rating} />

        <div className="series-meta">
          <div className="series-status">
            <span className={`status-dot ${status.dot}`} />
            <span className="status-label">{status.label}</span>
          </div>
          {show.seasons > 0 && (
            <span className="series-seasons">
              {show.seasons} Season{show.seasons !== 1 ? 's' : ''}
            </span>
          )}
        </div>

        <p className="movie-date">Started {show.dateStarted}</p>

        {show.notes && (
          <p className="movie-notes">{show.notes}</p>
        )}
      </div>
    </div>
  );
}
