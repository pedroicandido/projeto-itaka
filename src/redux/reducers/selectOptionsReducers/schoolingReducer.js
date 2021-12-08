import {
  SET_SCHOOLING,
  LOADING_OPTIONS_SCHOOLING,
  ON_FETCH_SCHOOLING_FAIL,
} from "../../types";

const initialState = {
  options: [],
  loading: false,
  error: null,
};

const schoolingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_OPTIONS_SCHOOLING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ON_FETCH_SCHOOLING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case SET_SCHOOLING:
      const formatOptions = action.payload.schoolingOptions.map((schooling) => ({
        value: schooling.id,
        label: schooling.descricao,
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

export default schoolingReducer;
