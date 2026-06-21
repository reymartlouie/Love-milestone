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

export default function MovieCard({ movie, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const genre = GENRE_COLORS[movie.genre] || GENRE_COLORS.Default;

  return (
    <div
      ref={ref}
      className={`movie-card ${isVisible ? 'show' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="movie-poster-area">
        {movie.poster ? (
          <img src={movie.poster} alt={movie.title} loading="lazy" className="movie-poster-img" />
        ) : (
          <div className="movie-poster-placeholder">
            <span className="movie-poster-icon">🎬</span>
          </div>
        )}
        <div className="movie-year-badge">{movie.year}</div>
      </div>

      <div className="movie-info">
        <div className="movie-header">
          <h3 className="movie-title">{movie.title}</h3>
          <span
            className="movie-genre"
            style={{ background: genre.bg, color: genre.text }}
          >
            {movie.genre}
          </span>
        </div>

        <HeartRating rating={movie.rating} />

        <p className="movie-date">Watched {movie.dateWatched}</p>

        {movie.notes && (
          <p className="movie-notes">{movie.notes}</p>
        )}
      </div>
    </div>
  );
}
