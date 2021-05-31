import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const RateStars = ({ rate, setrate }) => {
  const changeRating = (newrate) => {
    setrate(newrate);
  };
  return (
    <div>
      <StarRatings
        rating={rate}
        starDimension="35px"
        starRatedColor="yellow"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
        starSpacing="1px"
      />
      <button
        onClick={() => setrate(0)}
        style={{
          borderRadius: "25px 25px 25px 25px",
          width: "19px",
          height: "16px",
          fontSize: "10px",
          backgroundColor: "forestgreen",
          color: "whitesmoke",
          boxShadow: "green 1px 1px 5px 1px",
          border: "white",
          marginLeft: "10px",
          fontFamily: "sans-serif",
        }}
      >
        R
      </button>
    </div>
  );
};

export default RateStars;
