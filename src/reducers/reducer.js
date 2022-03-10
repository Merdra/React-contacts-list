const initialState = {
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
    };

const reducer = (state =initialState, action) => {
    switch (action.type) {
        case "ADD_USER":

            const newUser = {
                name: this.state.name,
                location: this.state.location,
                phone: this.state.phone,
                id: this.state.id,
              };
              return {...state, users: [...state.users, newUser]};



        // case "EDIT_USER":


        // case "DELETE_USER":


        default:
            return state;
    }
};

export default reducer;