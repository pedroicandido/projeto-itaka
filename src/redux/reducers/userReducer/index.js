import { ADD_USER } from "../../types";

const initialState = {
  users: [
    { id: 1, name: "Pedro Igor", email: "pedro@mail.com" },
    { id: 2, name: "Juliana", email: "juju@mail.com" },
    { id: 3, name: "Hiago Miguel", email: "hiao@mail.com" },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    default:
      return state;
  }
};

export default userReducer;
