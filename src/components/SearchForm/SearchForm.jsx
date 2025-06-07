import { AiOutlineSearch } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchForm.module.css';

export default function SearchForm({ onSubmitForm }) {
  const formSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value.toLowerCase().trim();

    if (inputValue === '') {
      toast.error('Field value cannot be empty!');
      return;
    }

    onSubmitForm(inputValue);
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={formSubmit}>
      <label className={css.label} htmlFor="search">
        Search for movies, TV series, etc...
      </label>
      <div className={css.inputWrap}>
        <input className={css.input} type="text" name="search" id="search" />
        <AiOutlineSearch className={css.icon} size={24} />
      </div>
      <Toaster />
    </form>
  );
}