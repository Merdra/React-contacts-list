import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';
import {v4 as uuid} from "uuid";
import {connect} from "react-redux";
import {addUserAction} from "../action/action";
import { useDispatch} from "react-redux";


const AddUserForm = (props) => {
  console.log (props);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");


    // handleChange = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //      [e.target.name] : e.target.value
    //     })
    // }
const  handleSubmit =(e) => {
    e.preventDefault();

    let newUser = {
      id: uuid(),
      name: name,
      location: location,
      phone: phone,
    };

    dispatch(addUserAction(newUser));

    props.addUser(newUser);
    setName("");
    setLocation("");
    setPhone("");
  }; 

    // this.props.addUser(this.state);
    // this.setState({
    //     name: "",
    //     location: "",
    //     phone: "",
    // })

    return (
      <div>
          <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter name" 
            value={name}
            onChange={(e) => {
              setName(e.target.value);              
            }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter your location" 
            name="location"
            value={location} 
            onChange={(e) => {
            setLocation(e.target.value);              
            }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="Phone Number" 
            name="phone" 
            value={phone}
            onChange={(e) => {
            setPhone(e.target.value);              
            }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }; 

  const sendActionAsProps = {
    createUser: addUserAction,
  };
  
  export default connect(null, sendActionAsProps)(AddUserForm);
