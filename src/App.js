import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import { movieinfo } from "./Components/movieinfo";
import MovieList from "./Components/MovieList";
function App() {
  const [rate, setrate] = useState(0);
  const [Search, setSearch] = useState("");
  const [moviesinfo, setMovies] = useState(movieinfo);
  return (
    <div>
      <NavBar
        Search={Search}
        setSearch={setSearch}
        rate={rate}
        setrate={setrate}
        moviesinfo={moviesinfo}
        setMovies={setMovies}
      />
      <br />
      <br />
      <br />
      <div className="app">
        <MovieList rate={rate} Search={Search} moviesinfo={moviesinfo} />
      </div>
    </div>
  );
}

export default App;
