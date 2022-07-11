import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


function MovieCard({ movie }) {
  return (
    <div className="card-div">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} className="image" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <ReactStars edit={false} value={movie.rate}></ReactStars>

          <Link to={`/description/${movie.description}`}> <Button>  Description </Button></Link>
          <Card.Text>
            {" "}
          </Card.Text>
          <Button variant="primary" href={movie.trailer} target={'_blanck'}>
            Regarder
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
