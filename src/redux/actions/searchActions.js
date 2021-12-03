import { SET_SEARCH, LOADING_SEARCH, ON_FETCH_SEARCH_FAIL } from "../types";

const isLoading = () => ({
  type: LOADING_SEARCH,
});

const onFetchOptionsFail = (error) => ({
  type: ON_FETCH_SEARCH_FAIL,
  payload: {
    error,
  },
});

const onFetchOptionsSuccess = ({ data, document }) => ({
  type: SET_SEARCH,
  payload: {
    data,
    document,
  },
});

export const setSearch = ({ api, document }) => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const params = {
        data: {
          search: [
            {
              field: "doc",
              operator: "is",
              value: document,
            },
          ],
        },
      };
      const response = await api.post("/person/search", params);
      dispatch(onFetchOptionsSuccess({data: response.data.data, document}));
    } catch (err) {
      dispatch(onFetchOptionsFail(err));
    }
  };
};
