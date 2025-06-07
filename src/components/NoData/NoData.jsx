import { PiFilmSlateLight } from 'react-icons/pi'; // Іконка
import css from './NoData.module.css';

export default function NoData() {
  return (
    <div className={css.container}>
      <PiFilmSlateLight className={css.icon} />
      <h2 className={css.text}>No data available</h2>
      <p className={css.subtext}>Try searching for something else...</p>
    </div>
  );
}