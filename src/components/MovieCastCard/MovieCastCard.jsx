import noImage from '../../img/no-image.webp';
import css from './MovieCastCard.module.css';

export default function MovieCastCard({
  item: { profile_path, original_name, character },
}) {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';
  const IMAGE_SIZE = 'w92';

  const getImgURL = profile_path
    ? `${BASE_IMG_URL}${IMAGE_SIZE}${profile_path}`
    : noImage;

  return (
    <div className={css.container}>
      <img className={css.img} src={getImgURL} alt={`${original_name} logo`} />
      <h2 className={css.title}>{original_name}</h2>
      <p className={css.text}>{character}</p>
    </div>
  );
}