"use client";

import { useState } from 'react';
import styles from './page.module.css';
import Button from './ui/Button/Button'

export default function Page() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if(search)
      window.location.assign(`list?search=${search}`);
    else
      setError(true);
  }

  return (
  <main className={styles.main}>
    <div className={styles.searchbar}>
      <div className={styles.title}>Search Movie</div>
        <input className={styles.searchformInput} type="text" value={search} placeholder="Enter movie title..." onChange={e => setSearch(e.target.value)} name="search" autoComplete="off"/>
        <Button onclick={handleSearch}>
          <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </Button>
        {
          error && 
          <p className={styles.errorMessage} role="alert">Please enter a movie title before clicking search. </p>
        }
    </div>
  </main>
  );
}
