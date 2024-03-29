import { SET_SEARCH, SET_NEW_PERSON } from "../../types";

const initialState = {
  document: "",
  person: null,
  loading: false,
  error: null,
  hasPerson: true,
  controller: true
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      let user = null;
      const hasUser =
        action.payload.data.length > 0 ? action.payload.data[0] : null;

      if (hasUser) {
        user = {
          name: hasUser.nome,
          id: hasUser.id,
          document: hasUser.doc,
        };
      }
      const cpf = action.payload.document;
      return {
        ...state,
        loading: false,
        error: null,
        document: cpf,
        hasPerson: hasUser,
        controller: hasUser,
        person: user,
      };

    case "RESET_HAS_USER":
      return {
        ...state,
        hasPerson: true,
      };

    case SET_NEW_PERSON:
      return{
        ...state,
        controller: true,
      }

      case 'RESET':
      return{
        ...state,
        controller: true,
        person: null
      }
    default:
      return state;
  }
};
export default searchReducer;
