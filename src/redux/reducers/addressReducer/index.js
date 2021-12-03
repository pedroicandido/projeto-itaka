import {
  LOADING_ADDRESS,
  SET_ADDRESS,
  ON_FETCH_ADDRESS_FAIL,
} from "../../types";

const initialState = {
  loading: false,
  error: null,
  address: {
    id: "",
    logradouro: "",
    cep: "",
    bairro_id: "",
    bairro: "",
    cidade_id: "",
    cidade: "",
    estado_id: "",
    estado: "",
  },
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ADDRESS:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case SET_ADDRESS:
      let address = action.payload.address;
      if (address.length > 0) {
        address = action.payload.address[0];
      }
      return {
        ...state,
        loading: false,
        address,
      };

    case ON_FETCH_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

      case 'RESET_ADDRESS':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default addressReducer;
