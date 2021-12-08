import {
  SET_PERSON_LIST,
  LOADING_PERSON,
  ON_FETCH_PERSON_FAIL,
  SET_NEW_PERSON
} from "../types";

const isLoading = () => ({
  type: LOADING_PERSON,
});

const onFailRequest = (error) => ({
  type: ON_FETCH_PERSON_FAIL,
  payload: {
    error,
  },
});

const onFetchPersonListSuccess = (data) => ({
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
      if(!response.status){
        onFailRequest()
      }
      dispatch(onFetchPersonListSuccess(response.data.data));
    } catch (err) {
      dispatch(onFailRequest());
    }
  };
};


const onCreatePersonSuccess = (data) => ({
  type: SET_NEW_PERSON,
  payload: {
    data: data,
  },
});



export const createPerson = ({api, data}) => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const response = await api.post("/person", data);
      console.log(response)
      if(response.status !== 200){
        return onFailRequest()
      }
      dispatch(onCreatePersonSuccess(response.data.data));
    } catch (err) {
      dispatch(onFailRequest());
    }
  };
};



const onSearchPersonSuccess = (data) => ({
  type: 'SET_SEARCH_PERSON',
  payload: {
    search: data,
  },
});


export const searchPersonByName = ({api, value}) => {
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
      const response = await api.post("/person/search", params);
      if(response.status !== 200){
        return onFailRequest()
      }
      dispatch(onSearchPersonSuccess(response.data.data));
    } catch (err) {
      dispatch(onFailRequest());
    }
  };
};
