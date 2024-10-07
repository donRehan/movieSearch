"use client";

import Image from "next/image";
import { useMovieStore } from '../stores/useMovieStore';
import { useEffect, useState } from "react";
import Link from "next/link";

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


  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie);
  };

  let width = 300;

  return (
  <>
  <div>
    {movies.map((movie: any) => (
      <div onClick={()=> handleMovieClick(movie)}>
        <Link href={
          {
            pathname: `/title`,
            query: { movie: JSON.stringify(movie) }
          }
        }>
          <Image width={width} height={width} src={`https://image.tmdb.org/t/p/w${width}/${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>{movie.vote_average}</p>
        </Link>
        <button>Add to favorites</button>
      </div>
    ))}
  </div>
  </>
  );
}

export default Page;
