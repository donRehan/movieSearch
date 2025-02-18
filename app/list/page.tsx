"use client";

//TODO: Dynamic routing for movie details
import Image from "next/image";
import { useMovieStore } from '../stores/useMovieStore';
import { useEffect, useState } from "react";
import Link from "next/link";
import { Star } from 'lucide-react';
import style from './page.module.css';

//TODO: Could delete this
import dotenv from 'dotenv';
dotenv.config();

const Page = (search: any) => {
  const { selectedMovie, setSelectedMovie } = useMovieStore();
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState({});
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const api_key = process.env.customKey;

  //TODO::endofproject Use middleware to handle api calls
  //TODO::Use clean style in this useEffect
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search.searchParams.search}&api_key=${api_key}`
        );
        let data = await response.json();
        setSelectedMovie(data.results);
        let movies = data.results;
        setMovies(movies);
      } catch (error) {
        setApiError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [search]);

  // Function to toggle favorite status
  const toggleFavorite = (e: React.MouseEvent, movieId: any) => {
    e.preventDefault();

    setFavorites((prevFavorites: any) => {
      if (prevFavorites.includes(movieId)) {
        // Remove from favorites if already present
        return prevFavorites.filter((id: any) => id !== movieId);
      } else {
        // Add to favorites
        return [...prevFavorites, movieId];
      }
    });
  };

  const handleFavorite = (e: React.MouseEvent, movie: any) => {
    e.preventDefault();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isFavorite = favorites.some((favorite: any) => favorite.id === movie.id);

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((favorite: any) => favorite.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    } else {
      // Add to favorites
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    setIsFavorite((prevIsFavorite) => ({
      ...prevIsFavorite,
      [movie.id]: favorites.some((favorite: any) => favorite.id === movie.id),
    }));
  };


  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie);
  };

  let width = 100;
  let height = 150;

  if (loading)
    return (
      <p className={style.progressText}>Loading...</p>
    )

  if (apiError)
    return (
      <div className={style.movieList}>
        <h1 className={style.h1}>Error</h1>
        <p>Error with the end point, please contact customer support</p>
      </div>
    )

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
                  {
                    //check if movie is in favorites
                    JSON.parse(localStorage.getItem("favorites") || "[]").some((favorite: any) => favorite.id === movie.id) ?
                      <button
                        className={style.favoriteButtonIS}
                        onClick={(e) => handleFavorite(e, movie)}
                      >
                        <Star />
                      </button>
                      :
                      <button
                        className={style.favoriteButton}
                        onClick={(e) => handleFavorite(e, movie)}
                      >
                        <Star />
                      </button>
                  }
                </li>
              </a>
            </Link>
          ))}
        </ul>
        {
          (movies.length === 0) && <p>No movies found with this name !</p>
        }
      </div>
    </>
  );
}

export default Page;
