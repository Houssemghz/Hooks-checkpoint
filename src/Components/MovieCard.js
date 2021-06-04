import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const MovieCard = ({ movie }) => {
  const { name, imgurl, description, rate, id } = movie;
  return (
    <div style={{ margin: "40px" }}>
      <Link to={`/trailer/${id}`} style={{ textDecoration: "none" }}>
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
            <Card.Title style={{ color: "black" }}>{name}</Card.Title>
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
              <h5>Click For More Details</h5>
              {/* <p>{description}</p> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
