const defaultSeries = [
  {
    id: 1,
    title: 'Your First Series Together',
    year: 2024,
    dateStarted: 'Month Day, Year',
    genre: 'Drama',
    rating: 5,
    seasons: 1,
    status: 'completed',
    notes: 'Your note goes here...'
  },
  {
    id: 2,
    title: 'Another Series You Watched',
    year: 2024,
    dateStarted: 'Month Day, Year',
    genre: 'Romance',
    rating: 4,
    seasons: 2,
    status: 'watching',
    notes: ''
  }
];

import privateData from './series.private.js';

const series = privateData || defaultSeries;

export default series;
