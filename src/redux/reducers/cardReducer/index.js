const initialState = {
  response: {
    showMessage: false,
    severity: "",
    message: "",
  },
  loading: false,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_CARD":
      return {
        ...state,
        loading: true,
      };
    case "SET_NEW_CARD":
      return {
        ...state,
        response: {
          showMessage: true,
          severity: "success",
          message: "Ficha criado com sucesso!",
        },
        loading: false,
      };

    case "ON_CARD_REQUEST_FAIL":
      return {
        ...state,
        loading: false,
        response: {
          showMessage: true,
          severity: "error",
          message: "Erro ao criar ficha!",
        },
      };
    default:
      return state;
  }
};

export default cardReducer