import {
  SET_SEARCH_CITY,
  LOADING_SEARCH_CITY,
  ON_FETCH_SEARCH_CITY_FAIL,
} from "../types";

const isLoading = () => ({
  type: LOADING_SEARCH_CITY,
});

const onFetchOptionsFail = (error) => ({
  type: ON_FETCH_SEARCH_CITY_FAIL,
  payload: {
    error,
  },
});

const onFetchOptionsSuccess = ({ data, document }) => ({
  type: SET_SEARCH_CITY,
  payload: {
    data,
  },
});

export const setSearchCity = ({ api, value }) => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const params = {
        data: {
          search: [
            {
              field: "nome",
              operator: "contains",
              value: value,
            },
          ],
        },
      };
      const response = await api.post("/city/search", params);
      dispatch(onFetchOptionsSuccess({ data: response.data.data }));
    } catch (err) {
      dispatch(onFetchOptionsFail(err));
    }
  };
};
