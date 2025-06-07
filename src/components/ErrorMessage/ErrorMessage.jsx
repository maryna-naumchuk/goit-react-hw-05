import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <p className={css.error}>
      Ooops! Something went wrong. Please reload page...
    </p>
  );
}