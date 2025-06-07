import { useState } from 'react';
import MovieCastCard from '../MovieCastCard/MovieCastCard';
import css from './MovieCastList.module.css';

export default function MovieCastList({ cast }) {
  const [showAll, setShowAll] = useState(false);

  const visibleCast = showAll ? cast : cast.slice(0, 12);

  return (
    <>
      <button
        className={css.btn}
        type="button"
        onClick={() => setShowAll(!showAll)}
      >
        {!showAll ? 'See all' : 'Hide'}
      </button>

      <ul className={css.list}>
        {visibleCast.map(item => (
          <li className={css.item} key={item.id}>
            <MovieCastCard item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}