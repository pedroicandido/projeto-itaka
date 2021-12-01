import { SET_CS, LOADING_OPTIONS_CS, ON_FETCH_CS_FAIL } from "../types";

const isLoading = () => ({
  type: LOADING_OPTIONS_CS,
});

const onFetchOptionsFail = (error) => ({
  type: ON_FETCH_CS_FAIL,
  payload: {
    error,
  },
});

const onFetchOptionsSuccess = (options) => ({
  type: SET_CS,
  payload: {
    csOptions: options,
  },
});

export const setCivilStatus = (api) => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const response = await api.get("/civil-status");
      dispatch(onFetchOptionsSuccess(response.data.data));
    } catch (err) {
      dispatch(onFetchOptionsFail(err));
    }
  };
};
