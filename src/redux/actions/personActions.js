import {
  SET_PERSON_LIST,
  LOADING_PERSON,
  ON_FETCH_PERSON_FAIL,
} from "../types";

const isLoading = () => ({
  type: LOADING_PERSON,
});

const onFetchOptionsFail = (error) => ({
  type: ON_FETCH_PERSON_FAIL,
  payload: {
    error,
  },
});

const onFetchOptionsSuccess = (data) => ({
  type: SET_PERSON_LIST,
  payload: {
    data: data,
  },
});

export const setPersonList = (api) => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const response = await api.get("/person");
      dispatch(onFetchOptionsSuccess(response.data.data));
    } catch (err) {
      dispatch(onFetchOptionsFail(err));
    }
  };
};
