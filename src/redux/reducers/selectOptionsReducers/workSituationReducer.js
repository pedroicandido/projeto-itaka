import { SET_WS, ON_FETCH_WS_FAIL, LOADING_OPTIONS_WS } from "../../types";

const initialState = {
  options: [],
  loading: false,
  error: null,
};

const workSituationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_OPTIONS_WS:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ON_FETCH_WS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case SET_WS:
      const formatOptions = action.payload.workSituationOptions.map((ws) => ({
        value: ws.id,
        label: ws.descricao,
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

export default workSituationReducer;
