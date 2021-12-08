import { SET_SCHOOLING, LOADING_OPTIONS_SCHOOLING, ON_FETCH_SCHOOLING_FAIL } from "../types";

const isLoading = () => ({
  type: LOADING_OPTIONS_SCHOOLING,
});

const onFetchOptionsFail = (error) => ({
  type: ON_FETCH_SCHOOLING_FAIL,
  payload: {
    error,
  },
});

const onFetchOptionsSuccess = (options) => ({
  type: SET_SCHOOLING,
  payload: {
    schoolingOptions: options,
  },
});

export const setSchooling = (api) => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const response = await api.get("/schooling");
      dispatch(onFetchOptionsSuccess(response.data.data));
    } catch (err) {
      dispatch(onFetchOptionsFail(err));
    }
  };
};
