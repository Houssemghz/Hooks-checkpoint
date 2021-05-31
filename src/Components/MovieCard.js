import React from "react";
import { Card } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const MovieCard = ({ movie }) => {
  const { name, imgurl, description, rate } = movie;
  return (
    <div style={{ margin: "40px" }}>
      <Card
        style={{
          width: "250px",
          height: "460px",
        }}
        className="card1"
      >
        <Card.Img
          style={{ width: "100%", height: "80%" }}
          variant="top"
          src={imgurl}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div>
            <StarRatings
              rating={rate}
              starDimension="30px"
              starRatedColor="yellow"
              numberOfStars={5}
              name="rating"
            />
          </div>
          <Card.Text className="summury">
            <h4>About</h4>
            <p>{description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
