import React from "react";
import {Card,Col} from "react-bootstrap";

const User = (props) => {
  return (
    <Col md="4" style={{marginBottom: "1rem"}}>
      <Card>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Contacts Information
          </Card.Subtitle>
          <Card.Title>{props.userInfo.name}</Card.Title>
          <Card.Text>
            <p>Location: {props.userInfo.location}</p>
            <p>Phone Number: {props.userInfo.phone}</p>
          </Card.Text>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
