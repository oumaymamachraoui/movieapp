import { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import { moviesData } from "./components/Data";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import "./style.css";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch]= useState("");

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  }

  const [keyRate, setKeyRate]= useState(0);

  return (
    <div className="App">
      <Filter inputSearch={inputSearch} setInputSearch={setInputSearch} keyRate={keyRate} setKeyRate={setKeyRate} />
      <MovieList movies={movies} key={movies.id} inputSearch={inputSearch} keyRate={keyRate} />
      <AddMovie add={add} />
    </div>
  );
}

export default App;
