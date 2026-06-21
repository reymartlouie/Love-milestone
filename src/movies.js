// Default placeholder movies for demo/public deployment
const defaultMovies = [
  {
    id: 1,
    title: 'Your First Movie Together',
    year: 2024,
    dateWatched: 'Month Day, Year',
    genre: 'Romance',
    rating: 5,
    notes: 'Your note goes here...'
  },
  {
    id: 2,
    title: 'Another Movie You Watched',
    year: 2024,
    dateWatched: 'Month Day, Year',
    genre: 'Drama',
    rating: 4,
    notes: ''
  }
];

// Load private movies if available (file is gitignored)
// Vite plugin returns null when file doesn't exist
import privateData from './movies.private.js';

const movies = privateData || defaultMovies;

export default movies;
