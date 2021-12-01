import {
  SET_CS,
  LOADING_OPTIONS_CS,
  ON_FETCH_CS_FAIL,
} from "../../types";

const initialState = {
  options: [],
  loading: false,
  error: null,
};

const civilStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_OPTIONS_CS:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ON_FETCH_CS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case SET_CS:
      const formatOptions = action.payload.csOptions.map((cs) => ({
        value: cs.id,
        label: cs.descricao,
      }));
      return {
        ...state,
        loading: false,
        error: null,
        options: formatOptions,
      };
    default:
      return state;
  }
};

export default civilStatusReducer;
