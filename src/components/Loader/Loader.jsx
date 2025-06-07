import PropagateLoader from 'react-spinners/PropagateLoader';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loaderWrap}>
      <PropagateLoader color="orangered" size={20} />
    </div>
  );
}