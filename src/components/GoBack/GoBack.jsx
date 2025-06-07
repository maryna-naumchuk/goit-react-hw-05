import { Link } from 'react-router-dom';
import css from './GoBack.module.css';

export default function GoBack({ to }) {
  return (
    <Link className={css.goBack} to={to}>
      Go back
    </Link>
  );
}