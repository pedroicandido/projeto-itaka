import jwtDecode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import dayjs from "dayjs";
import { setLoggout } from "../../redux/actions/authActions";

const baseURL = "http://localhost:8000/api";

const useAxios = () => {
  const authToken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwtDecode(authToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (isExpired) {
      dispatch(setLoggout());
    }
    return req;
  });

  return axiosInstance;
};

export default useAxios;
