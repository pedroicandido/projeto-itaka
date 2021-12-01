import {
  SET_RACE,
  LOADING_OPTIONS_RACE,
  ON_FETCH_RACE_FAIL,
} from "../../types";

const initialState = {
  options: [],
  loading: false,
  error: null,
};

const raceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_OPTIONS_RACE:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ON_FETCH_RACE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case SET_RACE:
      const formatOptions = action.payload.raceOptions.map((race) => ({
        value: race.id,
        label: race.descricao,
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

export default raceReducer;
