import noImg from '../../img/no-poster.webp';
import css from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';
  const IMAGE_SIZE = 'w185';
  const getImgURL = movie.poster_path
    ? `${BASE_IMG_URL}${IMAGE_SIZE}${movie.poster_path}`
    : noImg;

  const roundedRating = Number(movie.vote_average.toFixed(1));
  const releaseYear = movie.release_date.split('-')[0];

  return (
    <div className={css.card}>
      <img className={css.img} src={getImgURL} alt={`${movie.title} poster`} />
      <div className={css.content}>
        <h2 className={css.title}>{movie.title}</h2>
        <p className={css.rating}>IMDB: {roundedRating}</p>
        <p className={css.year}>{releaseYear}</p>
      </div>
    </div>
  );
}