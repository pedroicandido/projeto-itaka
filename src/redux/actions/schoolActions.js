import axios from "axios";
import {
  LOADING_SCHOOL,
  SET_SEARCH_SCHOOL,
  ON_FETCH_SCHOOL_FAIL,
} from "../types";

const onLoading = () => ({
  type: LOADING_SCHOOL,
});

const onSchoolSuccess = (data) => ({
  type: SET_SEARCH_SCHOOL,
  payload: {
    data,
  },
});

const createNewSchool = (data) => ({
  type: "SET_NEW_SCHOOL",
  payload: {
    data,
  },
});

const onFail = (error) => ({
  type: ON_FETCH_SCHOOL_FAIL,
  payload: {
    error,
  },
});

export const getSchool = ({ api, value }) => {
  return async (dispatch) => {
    dispatch(onLoading());
    try {
      const params = {
        data: {
          search: [
            {
              field: "escola",
              operator: "contains",
              value,
            },
          ],
        },
      };
      const response = await api.post(`/school/search`, params);
      dispatch(onSchoolSuccess(response.data.data));
    } catch (err) {
      dispatch(onFail(err));
    }
  };
};

export const setNewSchool = ({ api, data }) => {
  return async (dispatch) => {
    dispatch(onLoading());
    try {
      const response = await api.post("/school", data);
      dispatch(createNewSchool(response.data.data));
    } catch (err) {
      dispatch(onFail(err));
    }
  };
};
