import { combineReducers } from 'redux'
import menuReducer from './menuReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'
import kinshipReducer from './selectOptionsReducers/kinshipReducer'
import civilStatusReducer from './selectOptionsReducers/civilStatus'
import raceReducer from './selectOptionsReducers/raceReducer'

const rootReducer = combineReducers({
  menu: menuReducer,
  user: userReducer,
  auth: authReducer,
  kinship: kinshipReducer,
  civilStatus: civilStatusReducer,
  race: raceReducer
})

export default rootReducer