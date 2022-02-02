import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap';

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "",
            location: "",
            phone: "",
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
         [e.target.name] : e.target.value
        })
    }
handleSubmit =(e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
        name: "",
        location: "",
        phone: "",
    })
}

  render() {
    return (
      <div>
          <h3>Contacts Form</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter name" 
            name="name" 
            value={this.state.name}
            onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter your location" 
            name="location"
            value={this.state.location} 
            onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="Phone Number" 
            name="phone" 
            value={this.state.phone}
            onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddUserForm;
