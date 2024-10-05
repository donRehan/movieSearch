// stores/useMovieStore.ts
import { create } from 'zustand';

interface MovieState {
  //TODO: Use a better definition for selectedMovie
  /*
   Like this
  interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  */
  selectedMovie: null | Object;
  setSelectedMovie: (movie: Object) => void;
}

export const useMovieStore = create<MovieState>()((set) => ({
  selectedMovie: null,
  setSelectedMovie: (movie) => set((state) => ({selectedMovie: movie})),
}));
