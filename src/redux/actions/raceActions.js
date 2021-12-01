import { SET_RACE, LOADING_OPTIONS_RACE, ON_FETCH_RACE_FAIL } from "../types";

const isLoading = () => ({
  type: LOADING_OPTIONS_RACE,
});

const onFetchOptionsFail = (error) => ({
  type: ON_FETCH_RACE_FAIL,
  payload: {
    error,
  },
});

const onFetchOptionsSuccess = (options) => ({
  type: SET_RACE,
  payload: {
    raceOptions: options,
  },
});

export const setRace = (api) => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const response = await api.get("/race");
      dispatch(onFetchOptionsSuccess(response.data.data));
    } catch (err) {
      dispatch(onFetchOptionsFail(err));
    }
  };
};
