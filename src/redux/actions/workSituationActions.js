import { SET_WS, ON_FETCH_WS_FAIL, LOADING_OPTIONS_WS } from "../types";

const isLoading = () => ({
  type: LOADING_OPTIONS_WS,
});

const onFetchOptionsFail = (error) => ({
  type: ON_FETCH_WS_FAIL,
  payload: {
    error,
  },
});

const onFetchOptionsSuccess = (options) => ({
  type: SET_WS,
  payload: {
    workSituationOptions: options,
  },
});

export const setWorkSituation = (api) => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const response = await api.get("/work-situation");
      dispatch(onFetchOptionsSuccess(response.data.data));
    } catch (err) {
      dispatch(onFetchOptionsFail(err));
    }
  };
};
