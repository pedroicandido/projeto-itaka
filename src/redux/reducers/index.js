import { combineReducers } from 'redux'
import menuReducer from './menuReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'
import kinshipReducer from './selectOptionsReducers/kinshipReducer'

const rootReducer = combineReducers({
  menu: menuReducer,
  user: userReducer,
  auth: authReducer,
  kinship: kinshipReducer
})

export default rootReducer