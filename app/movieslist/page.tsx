"use client";

/*
 * to solve this issue we will fetch on the server 
 * and pass the data to the client 
 */

import { Props } from "next/script";
import Image from "next/image";
import { useMovieStore } from '../stores/useMovieStore';
import { useStore } from "zustand";
import { useEffect, useState } from "react";

const Page: React.FC<any>= (search) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${search.searchParams.search}&api_key=50353b5dca033033826c5b1de631e97e`
        );
        let data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };
    fetchMovies();
  }, [search]);


  const handleMovieClick = (movie: any) => {
    console.log("Movies", movie);
  };

  let width = 300;

  return (
  <>
  <div>
    {movies.map((movie: any) => (
    <div onClick={()=> handleMovieClick(movie)}>
    <Image width={width} height={width} src={`https://image.tmdb.org/t/p/w${width}/${movie.poster_path}`} alt={movie.title} />
    <h2>{movie.title}</h2>
    <p>{movie.release_date}</p>
    <p>{movie.vote_average}</p>
    </div>
    ))}
  </div>
  </>
  );
}

export default Page;
