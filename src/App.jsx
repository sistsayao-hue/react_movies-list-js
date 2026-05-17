import { MovieList } from './components/MovieList/MovieList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  return <MovieList movies={moviesFromServer} />;
};

<div className="sidebar" data-cy="Sidebar">
  Sidebar will be here
</div>;
