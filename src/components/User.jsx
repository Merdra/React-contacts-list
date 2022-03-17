import React from "react";
import {Card, Col, Modal, Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUserAction, editUserAction } from "../action/action";
// import EditUserForm from "./EditUserForm";

const User = (props) => {
  const user = props.user;

  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState(user.name);
  const [location, setLocation] = React.useState(user.location);
  const [phone, setPhone] = React.useState(user.phone);


  const handleClose = () => setShow(false);
  
  const handleSubmit = () => {
    let updatedUser = {
      id: user.id,
      name: name,
      location: location,
      phone: phone,
    };
  dispatch(editUserAction(user.id, updatedUser));

  handleClose();
};

  // const handleShow = () => setShow(true);


  //   const handleDelete = (e) => {
  //     e.preventDefault();
  //     props.deleteUser(props.userInfo.id);
  //   }
    return (
      <>
      <div> 
        <Col md="4" style={{ marginBottom: "1rem", width:"20rem"}}>
          <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                Contacts Information
              </Card.Subtitle>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                <p>Location: {user.location}</p>
                <p>Phone Number: {user.phone}</p>
              </Card.Text>
              <Card.Link href="#">
                <Button variant="outline-info" size="sm" onClick={() => setShow(true)}>
                  Edit
                </Button>
              </Card.Link>
              <Card.Link href="#">
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => dispatch(deleteUserAction(user.id))}
                >
                  Delete
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>


        {/* <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <Button variant="outline-info" onClick={() => setShow(true)}>Edit</Button>
        <Button variant="outline-danger" onClick={() => dispatch(deleteUserAction(user.id))}>Delete</Button> */}
      </div>
 
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>
              Name: <input 
                value={name}
                onChange= {(e) => setName(e.target.value)}
                placeholder="Name"
                />
            </h5>

            <h5>
              Location: <input 
              value={location}
              onChange= {(e) => setLocation(e.target.value)}
              placeholder= "Location"
              />
            </h5>

            <h5>
              Phone Number: <input 
                value={phone}
                onChange= {(e) => setPhone(e.target.value)}
                placeholder="Number"
                />
            </h5>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
            </Button>
            <Button variant="outline-primary" onClick={handleSubmit}>
            Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

{/* 
        <Col md="4" style={{ marginBottom: "1rem" }}>
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
              <Card.Link href="#">
                <Button variant="outline-info" size="sm" onClick={handleShow}>
                  Edit
                </Button>
              </Card.Link>
              <Card.Link href="#">
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
 */}
    </>
  );
};

export default User;
