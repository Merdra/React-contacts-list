import {v4 as uuid} from "uuid";

const initialState = {
    users: [
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
      ],
      student: [],
      number: [],
      isLoggedIn: false,
      age: [],
    };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":

            // const newUser = {
            //     name: this.state.name,
            //     location: this.state.location,
            //     phone: this.state.phone,
            //     id: this.state.id,
            //   };
              return {...state, users: [...state.users, action.payload]};

        case "EDIT_USER":
          const users = state.users.map((user) => {
            if (user.id === action.payload.id) return action.payload.newDetails;
            return user;
          });
          return {...state, users: users};

        case "DELETE_USER":
          const filteredUsers = state.users.filter((user) => {
            if (user.id !== action.payload) return user;
          });
    
        return {...state, users: filteredUsers }; 
        default:
            return state;
    }
};

export default reducer;