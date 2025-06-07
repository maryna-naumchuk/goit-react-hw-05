import { formatDistanceToNow } from 'date-fns';
import noImage from '../../img/no-image.webp';
import css from './MovieReviewsCard.module.css';

export default function MovieReviewsCard({
  review: {
    author,
    content,
    author_details: { avatar_path },
    created_at,
  },
}) {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';
  const IMAGE_SIZE = 'w92';

  const getImgURL = avatar_path
    ? `${BASE_IMG_URL}${IMAGE_SIZE}${avatar_path}`
    : noImage;

  const formatedData = formatDistanceToNow(new Date(created_at));

  return (
    <div className={css.container}>
      <img className={css.img} src={getImgURL} alt={`${author} avatar`} />
      <div className={css.contentWrap}>
        <h2 className={css.title}>{author}</h2>
        <p className={css.text}>{content}</p>
        <p className={css.postedData}>{`${formatedData} ago`}</p>
      </div>
    </div>
  );
}