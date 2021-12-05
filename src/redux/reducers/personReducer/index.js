import {
  SET_PERSON_LIST,
  LOADING_PERSON,
  ON_FETCH_PERSON_FAIL,
} from "../../types";

const initialState = {
  loading: false,
  error: null,
  personList: [],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PERSON:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_PERSON_LIST:
      const list = action.payload.data;
      console.log(list);
      return {
        ...state,
        loading: false,
        error: null,
        personList: list
      };

    case ON_FETCH_PERSON_FAIL:
      return {
        ...state,
        personList: [],
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default personReducer;
