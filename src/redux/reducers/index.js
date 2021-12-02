import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import kinshipReducer from "./selectOptionsReducers/kinshipReducer";
import civilStatusReducer from "./selectOptionsReducers/civilStatus";
import raceReducer from "./selectOptionsReducers/raceReducer";
import workSituationReducer from "./selectOptionsReducers/workSituationReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  user: userReducer,
  auth: authReducer,
  kinship: kinshipReducer,
  civilStatus: civilStatusReducer,
  race: raceReducer,
  workSituation: workSituationReducer,
  search: searchReducer,
});

export default rootReducer;
