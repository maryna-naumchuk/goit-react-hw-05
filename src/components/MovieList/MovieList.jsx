import { Link, useLocation } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li className={css.item} key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <MovieCard movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
}