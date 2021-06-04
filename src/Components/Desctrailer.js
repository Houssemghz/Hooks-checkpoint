import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Desctrailer = ({ moviesinfo }) => {
  const { id } = useParams();
  const movie = moviesinfo.filter((movie) => movie.id == id)[0];
  console.log("movie", movie);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <img
          src="https://pics.freeicons.io/uploads/icons/png/18837429041582692250-512.png"
          style={{ width: "60px" }}
        ></img>
      </Link>
      <p
        style={{
          marginTop: "50px",
          fontFamily: "sans-serif",
          fontSize: "15px",
        }}
      >
        {movie.description}
      </p>
      <ReactPlayer
        url={movie.trailer}
        controls={true}
        style={{
          marginTop: "30px",
          // border: "solid black 3px",
          boxShadow: "gray 1px 1px 29px 1px",
        }}
      />
    </div>
  );
};

export default Desctrailer;
