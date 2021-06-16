import { TOGGLE_CANDIDATE_MENU, TOGGLE_USER_MENU, TOGGLE_CLASS_MENU, OPEN_CLASS_MENU } from '../../types'

const initialState = {
  candidate: false,
  class: false,
  user: false
}

const menuReducer = (state = initialState, action) => {

  switch (action.type) {
    case OPEN_CLASS_MENU:
      return {
        ...state,
        class: true
      }
    case TOGGLE_CANDIDATE_MENU:
      return {
        ...state,
        candidate: !state.candidate
      }
    case TOGGLE_CLASS_MENU:
      return {
        ...state,
        class: !state.class
      }
    case TOGGLE_USER_MENU:
      return {
        ...state,
        user: !state.user
      }
    default:
      return state;
  }
}

export default menuReducer