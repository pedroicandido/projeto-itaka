import { combineReducers } from 'redux'
import menuReducer from './menuReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  menu: menuReducer,
  user: userReducer,
  auth: authReducer
})

export default rootReducer