"use client";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams();
  //transform searchParams.get('movie') to a JSON object
  let movie = JSON.parse(searchParams.get('movie'));
  console.log(Object.keys(movie));
  let width = 300;

  return (
  <div>
    <h1>{movie.title}</h1>
    <Image width={width} height={width} src={`https://image.tmdb.org/t/p/w${width}/${movie.poster_path}`} alt={movie.title} />
    <p>{movie.overview}</p>
    <p>{movie.genre_ids}</p>
    <p>{movie.vote_average}</p>
  </div>
  );
}
