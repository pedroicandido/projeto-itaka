import {
  SET_SEARCH_CITY,
  LOADING_SEARCH_CITY,
  ON_FETCH_SEARCH_CITY_FAIL,
} from "../../types";

const initialState = {
  loading: false,
  cities: [],
  error: null,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SEARCH_CITY:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_SEARCH_CITY:
      const cities = action.payload.data;
      return {
        ...state,
        cities,
        loading: false,
      };

    case ON_FETCH_SEARCH_CITY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
export default cityReducer;
