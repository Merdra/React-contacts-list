import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users'
import AddUserForm from './components/AddUserForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[
        {
          name: "Mike",
          location: "Ashtown",
          phone: "0225354254"
        },
        {
          name: "Eyram",
          location: "Florida",
          phone: "+12225455845"
        },
        {
          name: "Eugy",
          location: "East Legon",
          phone: "0204215685"
        },
      ]
    }
  }
  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
  }
  render() {
    return (
      <div>
        <Container fluid style={{marginTop: '1rem'}}>
          <Row>
            <Col md="4">
              <AddUserForm addUser={this.addNewUser} />
            </Col>

            <Col>
            <h3>Contacts</h3>
              <Users usersData={this.state.users} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
