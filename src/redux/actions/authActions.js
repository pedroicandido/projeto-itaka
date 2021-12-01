import { LOGIN, FETCH_LOGIN, ON_FETCH_USER_FAIL, LOGGOUT } from "../types";
import api from "../../services/api";

const onLoadingUser = () => ({
  type: FETCH_LOGIN,
});

const userSuccess = (token) => ({
  type: LOGIN,
  payload: {
    token,
  },
});

const userFail = (error) => ({
  type: ON_FETCH_USER_FAIL,
  payload: {
    error,
  },
});

export const setLoggout = () => ({
  type: LOGGOUT,
});

export const setUser = ({ email, password, navigation }) => {
  return async (dispatch) => {
    dispatch(onLoadingUser());
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      dispatch(userSuccess(response.data.token));
      navigation.push('/')
    } catch (err) {
      dispatch(userFail(err));
    }
  };
};
