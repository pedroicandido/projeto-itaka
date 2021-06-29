import { LOGIN } from '../../types'

const initialState = {
  isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true
      }

    default:
      return state;
  }
}

export default authReducer