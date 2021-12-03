import { SET_ADDRESS, LOADING_ADDRESS, ON_FETCH_ADDRESS_FAIL } from "../types";

const isLoading = () => ({
  type: LOADING_ADDRESS,
});

const onFetchOptionsFail = (error) => ({
  type: ON_FETCH_ADDRESS_FAIL,
  payload: {
    error,
  },
});

const onFetchOptionsSuccess = (data) => ({
  type: SET_ADDRESS,
  payload: {
    address: data,
  },
});

export const setAddress = ({ api, cep }) => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const params = {
        data: {
          search: [
            {
              field: "cep",
              operator: "is",
              value: cep,
            },
          ],
        },
      };
      const response = await api.post("/address/search", params);
      console.log('to chegando aqui')
      dispatch(onFetchOptionsSuccess(response.data.data));
    } catch (err) {
      dispatch(onFetchOptionsFail(err));
    }
  };
};
