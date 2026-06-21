import movies from '../movies';
import MovieCard from './MovieCard';

export default function MoviesSection() {
  return (
    <section className="movies-section">
      <h2 className="movies-title">Movies We've Watched</h2>
      <p className="movies-subtitle">Every film, every couch moment, every shared popcorn.</p>
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </div>
    </section>
  );
}
