import {
  SET_KINSHIP,
  LOADING_OPTIONS,
  ON_FETCH_KINSHIP_FAIL,
} from "../../types";

const initialState = {
  options: [],
  loading: false,
  error: null,
};

const kinshipReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_OPTIONS:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ON_FETCH_KINSHIP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case SET_KINSHIP:
      const formatOptions = action.payload.kinshipOptions.map((kinship) => ({
        value: kinship.id,
        label: kinship.descricao,
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

export default kinshipReducer;
