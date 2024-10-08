"use client";

import Image from "next/image";
import { useMovieStore } from '../stores/useMovieStore';
import { useEffect, useState } from "react";
import Link from "next/link";
import { Star } from 'lucide-react';
import style from './page.module.css';

const Page: React.FC<any>= (search) => {
  const {selectedMovie, setSelectedMovie} = useMovieStore();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${search.searchParams.search}&api_key=50353b5dca033033826c5b1de631e97e`
        );
        let data = await response.json();
        setSelectedMovie(data.results);
        let movies = data.results;
        setMovies(movies);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };
    fetchMovies();
  }, [search]);

  const handleFavorite = (e: React.MouseEvent, movieId: number) => {
    e.preventDefault()
    console.log('Toggling favorite for movie:', movieId)
  }


  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie);
  };

  let width = 100;
  let height = 150;

  //TODO: Display a message if no movies are found.
  //TODO: Display a message if input was given from the user
  //TODO: Display a message if end point had an issue
  return (
  <>
    <div className={style.movieList}>
      <h1 className={style.h1}>Movie List</h1>
      <ul className={style.ul}>
        {movies.map((movie: any) => (
            <Link href={
              {
                pathname: `/title`,
                query: { movie: JSON.stringify(movie) }
              }
            }
            passHref
            legacyBehavior
            >
            <a className={style.movieLink}>
          <li key={movie.id} className={style.movieItem}>
            <Image className={style.moviePoster} width={width} height={height} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title} poster`} />
            <div className={style.movieInfo}>
              <h2 className={style.h2}>{movie.title}</h2>
              <p className={style.p}>Release Date: {movie.release_date}</p>
              <p className={style.p}>Rating: {movie.vote_average.toFixed(1)}/10</p>
            </div>
            <button 
            className={`${style.favoriteButton} ${movie.isFavorite ? 'is-favorite' : ''}`}
            onClick={(e) => handleFavorite(e, movie.id)}
            >
              <Star />
            </button>
          </li>
            </a>
            </Link>
        ))}
      </ul>
    </div>

  </>
  );
}

export default Page;
