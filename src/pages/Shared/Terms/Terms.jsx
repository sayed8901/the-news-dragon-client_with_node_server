import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Card className="container mx-auto my-5 text-center w-50">
      <Card.Body>
        <Card.Title className="my-5">Terms & Conditions</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Please read carefully our user manual & T&Cs</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
        <p className="my-5">Go back to <Link to={'/register'}>Register</Link></p>
      </Card.Body>
    </Card>
  );
};

export default Terms;
