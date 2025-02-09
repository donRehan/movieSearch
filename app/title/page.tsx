"use client";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import styles from './page.module.css';
import { Heart, Play } from 'lucide-react';

export default function Page() {
  const searchParams = useSearchParams();
  //TODO: directy search a query using the movie id to get all it's details
  /*
   * Using the following format
   * 'https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}'
 */
  let movie = JSON.parse(searchParams.get('movie'));
  console.log(movie);
  let width = 300;
  let height = 450;

  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>
        {movie.title}
      </h1>

      <div className={styles.boxDiv}>
        <Image
          width={300} height={450}
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
          style={{
            objectFit: 'cover',
            border: '5px solid #000',
          }}
        />

        <div className={styles.rightSection}>
          <div>
            <div className={styles.ratingContainer}>
              Rating: {movie.vote_average.toFixed(1)}/10
            </div>

            <p className={styles.movieDesc}>
              {movie.overview}
            </p>

            <div className={styles.releaseDate}>
              Release date: {movie.release_date}
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}>
          </div>
        </div>
      </div>
    </div>
  );
}

