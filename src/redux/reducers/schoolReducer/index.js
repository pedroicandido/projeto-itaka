import { SET_SEARCH_SCHOOL, LOADING_SCHOOL } from "../../types";

const initialState = {
  options: [],
  loading: false,
  error: null,
  response: {
    showMessage: false,
    severity: "success",
    message: "",
    ok: false,
  },
};

const schoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SCHOOL:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_SEARCH_SCHOOL:
      const schoolOptions = action.payload.data;
      return {
        ...state,
        options: schoolOptions,
        loading: false,
        error: null,
      };

    case "SET_NEW_SCHOOL":
      return {
        ...state,
        loading: false,
        response: {
          severity: "success",
          showMessage: true,
          message: "Escola criada com sucesso!",
          ok: true,
        },
      };

    case "RESET_SCHOOL":
      return {
        ...state,
        response: {
          severity: "success",
          showMessage: false,
          message: "",
          ok: false,
        },
      };
    default:
      return state;
  }
};

export default schoolReducer;
