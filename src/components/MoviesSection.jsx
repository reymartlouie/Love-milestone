import { useState } from 'react';
import movies from '../movies';
import series from '../series';
import MovieCard from './MovieCard';
import SeriesCard from './SeriesCard';

const TABS = {
  movies: {
    title: "Movies We've Watched",
    subtitle: "Every film, every couch moment, every shared popcorn.",
  },
  series: {
    title: "Series We've Binged",
    subtitle: "Every episode, every late night, every cliffhanger.",
  },
};

export default function MoviesSection() {
  const [active, setActive] = useState('movies');
  const tab = TABS[active];

  return (
    <section className="movies-section">
      <h2 className="movies-title">{tab.title}</h2>
      <p className="movies-subtitle">{tab.subtitle}</p>

      <div className="segment-control" role="tablist">
        {Object.entries(TABS).map(([key, { title }]) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            className={`segment-btn${active === key ? ' active' : ''}`}
            onClick={() => setActive(key)}
          >
            {key === 'movies' ? 'Movies' : 'Series'}
          </button>
        ))}
      </div>

      <div key={active} className="movies-grid">
        {active === 'movies'
          ? movies.map((movie, i) => <MovieCard key={movie.id} movie={movie} index={i} />)
          : series.map((show, i) => <SeriesCard key={show.id} show={show} index={i} />)
        }
      </div>
    </section>
  );
}
