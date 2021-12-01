import { SET_KINSHIP, LOADING_OPTIONS, ON_FETCH_KINSHIP_FAIL } from "../types";

const isLoading = () => ({
  type: LOADING_OPTIONS,
});

const onFetchOptionsFail = (error) => ({
  type: ON_FETCH_KINSHIP_FAIL,
  payload: {
    error,
  },
});

const onFetchOptionsSuccess = (options) => ({
  type: SET_KINSHIP,
  payload: {
    kinshipOptions: options,
  },
});

export const setKinship = (api) => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const response = await api.get("/kinship");
      dispatch(onFetchOptionsSuccess(response.data.data));
    } catch (err) {
      dispatch(onFetchOptionsFail(err));
    }
  };
};
