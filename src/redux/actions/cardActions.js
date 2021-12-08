import {
  SET_PERSON_LIST,
  LOADING_PERSON,
  ON_FETCH_PERSON_FAIL,
  SET_NEW_PERSON,
} from "../types";

const isLoading = () => ({
  type: "LOADING_CARD",
});

const onFailRequest = () => ({
  type: "ON_CARD_REQUEST_FAIL",
});

const onCreatePersonSuccess = (data) => ({
  type: "SET_NEW_CARD",
  payload: {
    data: data,
  },
});

export const createCard = ({ api, data }) => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const response = await api.post("/card", data);
      console.log('criaaaaaaaaado', response);
      if (response.status !== 200) {
        return onFailRequest();
      }
      dispatch(onCreatePersonSuccess(response.data.data));
    } catch (err) {
      dispatch(onFailRequest());
    }
  };
};
