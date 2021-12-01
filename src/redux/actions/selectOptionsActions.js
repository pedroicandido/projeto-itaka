import { SET_KINSHIP } from "../types";

export const setKinship = (api) => {
  return async (dispatch) => {
    const res = await api.get("/kinship");
    console.log(res);
  };
};
