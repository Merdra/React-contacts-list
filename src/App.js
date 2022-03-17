import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users'
import AddUserForm from './components/AddUserForm';
import './App.css';
import {v4 as uuid} from "uuid";
import background from "../src/bg.jpg";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "Mike",
      location: "Ashtown",
      phone: "0225354254",
      id: uuid()
    },
    {
      name: "Eyram",
      location: "Florida",
      phone: "+12225455845",
      id: uuid()
    },
    {
      name: "Eugy",
      location: "East Legon",
      phone: "0204215685",
      id: uuid()
    },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser])
  };
  
  const deleteUser = (id) => {
    // eslint-disable-next-line array-callback-return
    const filteredUsers = users.filter((user) => {
      if (id !== user.id) return user;
    });
  
    setUsers(filteredUsers);
};

const editUser = (id, updatedUser) => {
  const updatedUsers =users.map((user) => {
    if (id === user.id) return updatedUser
    else return user
  });

  setUsers(updatedUsers);
};

    return (
      <div>
        <Container fluid style={{ marginTop: '0rem', backgroundColor:"lightblue"}}>
          <Row>
            <Col md="4">
              <h3>Contacts Form</h3>
              <br />
              <AddUserForm addUser={addUser} />
            </Col>

            <Col>
              <h3>Contacts</h3>
              <br />
              <Users 
                usersData={users} 
                deleteUser={deleteUser} 
                editUser={editUser} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

export default App;


  //     // users: [
  //     //   {
  //     //     name: "Mike",
  //     //     location: "Ashtown",
  //     //     phone: "0225354254",
  //     //     id: "mike2"
  //     //   },
  //     //   {
  //     //     name: "Eyram",
  //     //     location: "Florida",
  //     //     phone: "+12225455845",
  //     //     id: "eyram4"
  //     //   },
  //     //   {
  //     //     name: "Eugy",
  //     //     location: "East Legon",
  //     //     phone: "0204215685",
  //     //     id: "eugy23"
  //     //   },
  //     // ]
  //   }
  // }
  // addNewUser = (user) => {
  //   user.id = Math.random().toString()
  //   this.setState({
  //     users: [...this.state.users, user]
  //   })
  // }
  // deleteUser = (id) => {
  //   let undeletedUsers = this.state.users.filter((user) => user.id !== id);
  //   this.setState({
  //     users: undeletedUsers
  //   })
  // }

  // editUser = (id, updatedUser) => {
  //   this.setState({
  //     users: this.state.users.map(user => user.id === id ? updatedUser : user)
  //   })
  // }

  // render() {