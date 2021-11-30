import { FETCH_LOGIN, LOGGOUT, LOGIN, ON_FETCH_USER_FAIL } from "../../types";

const initialState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ON_FETCH_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
      };

    case LOGGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default authReducer;
