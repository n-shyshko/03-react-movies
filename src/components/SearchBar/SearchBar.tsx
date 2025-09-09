import styles from "./SearchBar.module.css";

interface SearchFormProps {
  onSearch: (searchValue: string) => void;
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const searchValue = formData.get("query") as string;
    onSearch(searchValue);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href='https://www.themoviedb.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by TMDB
        </a>
        <form action={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type='text'
            name='query'
            autoComplete='off'
            placeholder='Search movies...'
            autoFocus
          />
          <button className={styles.button} type='submit'>
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchForm;
