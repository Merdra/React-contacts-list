import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users'
import AddUserForm from './components/AddUserForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Mike",
          location: "Ashtown",
          phone: "0225354254",
          id: "mike2"
        },
        {
          name: "Eyram",
          location: "Florida",
          phone: "+12225455845",
          id: "eyram4"
        },
        {
          name: "Eugy",
          location: "East Legon",
          phone: "0204215685",
          id: "eugy23"
        },
      ]
    }
  }
  addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedUsers
    })
  }

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }

  render() {
    return (
      <div>
        <Container fluid style={{ marginTop: '1rem'}}>
          <Row>
            <Col md="4">
              <h3>Contacts Form</h3>
              <br />
              <AddUserForm addUser={this.addNewUser} />
            </Col>

            <Col>
              <h3>Contacts</h3>
              <br />
              <Users 
                usersData={this.state.users} 
                deleteUser={this.deleteUser} 
                editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
