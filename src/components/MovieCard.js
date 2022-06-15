import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function MovieCard({ movie }) {
  return (
    <div className="card-div">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} className="image" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text className="descript">{movie.description}</Card.Text>
          <Card.Text>
            <ReactStars
              count={5}
              
              size={24}
              value={movie.rate}
              activeColor="#ffd700"
            />
            {" "}
          </Card.Text>
          <Button variant="primary" href={movie.trailer}>
            Regarder
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
