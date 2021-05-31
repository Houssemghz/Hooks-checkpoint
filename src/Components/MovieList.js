import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ moviesinfo, rate, Search }) => {
  const searching = () => {
    if (rate > 0 && Search.trim()) {
      return moviesinfo.filter(
        (movie) =>
          movie.name.toLowerCase().includes(Search.toLowerCase()) &&
          movie.rate == rate
      );
    }
    if (rate > 0) {
      return moviesinfo.filter((movie) => movie.rate == rate);
    }
    if (Search.trim()) {
      return moviesinfo.filter((movie) =>
        movie.name.toLowerCase().includes(Search.toLowerCase())
      );
    }
    return moviesinfo;
  };
  return (
    <div className="cardbox">
      {searching().map((movie, i) => {
        return (
          <div key={i}>
            <MovieCard movie={movie} />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
