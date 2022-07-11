import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddMovie from "./components/AddMovie";
import { moviesData } from "./components/Data";
import Description from "./components/Description";
import MovieList from "./components/MovieList";
import Navigation from "./components/Navigation";
import "./style.css";

function App() {
  const [movies, setMovies] = useState(moviesData);

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };


  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              movies={movies}
              key={movies.id}
            />
          }
        />
        <Route path="/description/:description" element={<Description movie={movies}/>} />
        <Route path="/add_movie" element={<AddMovie add={add} />} />
        
      </Routes>
     

        
    </div>
  );
}

export default App;
