import MovieReviewsCard from '../MovieReviewsCard/MovieReviewsCard';
import css from './MovieReviewsList.module.css';

export default function MovieReviewsList({ reviews }) {
  return (
    <ul className={css.list}>
      {reviews.map(review => (
        <li className={css.item} key={review.id}>
          <MovieReviewsCard review={review} />
        </li>
      ))}
    </ul>
  );
}