import {
  SET_PERSON_LIST,
  LOADING_PERSON,
  ON_FETCH_PERSON_FAIL,
  SET_NEW_PERSON,
} from "../../types";

const initialState = {
  loading: false,
  error: null,
  personList: [],
  search:[],
  response: {
    showMessage: null,
    message: "",
    severity: "success",
  },
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PERSON:
      return {
        ...state,
        loading: true,
        response: {
          ...initialState.response,
        },
      };
    case SET_PERSON_LIST:
      const list = action.payload.data;
      return {
        ...state,
        loading: false,
        error: null,
        personList: list,
      };

    case ON_FETCH_PERSON_FAIL:
      return {
        ...state,
        personList: [],
        response: {
          showMessage: true,
          message: "Erro ao criar candidato",
          severity: "error",
        },
        loading: false,
      };

    case SET_NEW_PERSON:
      return {
        ...state,
        response: {
          showMessage: true,
          message: "Usuário criado com sucesso!",
          severity: "success",
        },
        loading: false,
      };

    case "SET_SEARCH_PERSON":
      const data = action.payload.search;
      return {
        ...state,
        error:null,
        loading: false,
        search: data
      };

    case "RESET_RESPONSE":
      return {
        ...state,
        response: {
          showMessage: false,
          message: "",
          severity: "",
        },
      };
    default:
      return state;
  }
};

export default personReducer;
