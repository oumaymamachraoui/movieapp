import React, { useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div>
      <Filter inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <div  className="movielist">
      {movies
        .filter((movie) =>
          movie.title.toLowerCase().includes(inputSearch.toLowerCase().trim())
        )
        .map((movie) => (
          <MovieCard movie={movie} />
        ))}
        </div>
    </div>
  );
}

export default MovieList;
