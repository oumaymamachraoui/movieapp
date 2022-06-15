import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, inputSearch, keyRate }) {
  return (
    <div className="movielist">
      {movies
        .filter(
          (movie) =>
            movie.rate >= keyRate &&
            movie.title.toLowerCase().includes(inputSearch.toLowerCase().trim())
        )
        .map((movie) => (
          <MovieCard movie={movie} />
        ))}
    </div>
  );
}

export default MovieList;
