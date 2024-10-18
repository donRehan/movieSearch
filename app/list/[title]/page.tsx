"use client";

import React, { useEffect, useState } from "react";
import styles from './page.module.css';
import Image from 'next/image';

const MovieDetails = ({ params }: { params: { title: string } }) => {
const { title } = params;
const [movie, setMovie] = useState([]);
const [pageError, setError] = useState(false);
const [loading, setLoading] = useState(true);
const api_key = process.env.customKey;

//Fetch details
const fetchMovieDetails = async () => {
  try {
    //TODO: Move into serpate file if possible *function
    const response = await fetch(`https://api.themoviedb.org/3/movie/${title}?api_key=${api_key}`);
    const data = await response.json();
    setMovie(data);
  }
  //TODO: Add error message on error state
  catch (error) {
    setError(true);
    console.log(error);
  }
  //TODO: Add loading effect
  finally {
    setLoading(false);
  }
}

useEffect(() => {
  fetchMovieDetails();
}, [title])

//Handle error message properly && Null
if(movie === null)
  return <p>Didn't read</p>


  let width = 100;
  let height = 150;

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
              Rating: {movie.vote_average}/10
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
};

export default MovieDetails;
