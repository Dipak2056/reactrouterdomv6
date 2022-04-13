import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const CustomCard = ({ movie, handleOnAddToList }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          Language:{movie.Languauge} <br />
          Writer:{movie.Writer} <br />
          BoxOffice: {movie.BoxOffice} <br />
        </Card.Text>
        <Button variant="primary" onClick={handleOnAddToList}>
          Add to List{" "}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
