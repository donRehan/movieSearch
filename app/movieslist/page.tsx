"use client";

/*
 * to solve this issue we will fetch on the server 
 * and pass the data to the client 
 */

import { Props } from "next/script";
import Image from "next/image";
import { useMovieStore } from '../stores/useMovieStore';
import { useStore } from "zustand";

const Page: React.FC<any>= async (search) => {
  // Catch errors if the fetch fails
  let data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search.searchParams.search}&api_key=50353b5dca033033826c5b1de631e97e`);
  let movies = await data.json();

  const handleMovieClick = (movie: any) => {
    useMovieStore(movie);
  };

  let width = 300;

  return (
  <>
  <div>
    {movies.results.map((movie: any) => (
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
