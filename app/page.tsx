import styles from './page.module.css';
import Button from './ui/Button/Button'

export default function Page() {

  return (
  <main className={styles.main}>
    <div className={styles.searchbar}>
      <div className={styles.title}>Search Movie</div>
      <form className={styles.searchForm} action="/list" method="GET"> 
        <input className={styles.searchformInput} type="text" placeholder="Enter movie title..." name="search" autoComplete="off"/>
        <Button type="submit">
          <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </Button>
      </form>
    </div>
  </main>
  );
}
