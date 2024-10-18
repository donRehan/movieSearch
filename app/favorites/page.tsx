"use client";
import Link from 'next/link';
import style from './page.module.css';
import Image from "next/image";
import { Star } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function Page()
{
  const [favorites, setFavorites] = useState([]); 
  const [rendered, setRendered] = useState(false); 
  const [loading, setLoading] = useState(true); 
  let width = 100;
  let height = 150;

  // Fetch favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
    setRendered(true);
    setLoading(false);
  }, []);

  const handleFavorite  
 = (e: React.MouseEvent, movie: any) => {
    e.preventDefault();

    const updatedFavorites = favorites.filter(
      (favorite: any) => favorite.id !== movie.id
    );

    // Update localStorage and state atomically to ensure consistency
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };


  if(loading) 
    return (
        <p className={style.progressText}>Loading...</p>
        )

  return (
    <>
    <div className={style.movieList}>
      <h1 className={style.h1}>Favorites List</h1>
      <ul className={style.ul}>
        {favorites.map((movie: any) => (
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
              className={
                style.favoriteButtonIS
              }
              onClick={(e) => handleFavorite(e, movie)}
              >
                <Star />
              </button>
          </li>
            </a>
            </Link>
        ))}
      </ul>
    {
      (favorites.length === 0 && rendered) ?
      <p>Add movies to favorites to view your favorites</p> : null
    }
    </div>
    </>
    )
}
