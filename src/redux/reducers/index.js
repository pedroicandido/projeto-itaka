import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import kinshipReducer from "./selectOptionsReducers/kinshipReducer";
import civilStatusReducer from "./selectOptionsReducers/civilStatus";
import raceReducer from "./selectOptionsReducers/raceReducer";
import workSituationReducer from "./selectOptionsReducers/workSituationReducer";
import searchReducer from "./searchReducer";
import addressReducer from "./addressReducer";
import cityReducer from "./cityReducer";
import personReducer from "./personReducer";
import schoolReducer from "./schoolReducer";
import schoolingReducer from "./selectOptionsReducers/schoolingReducer";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  user: userReducer,
  auth: authReducer,
  kinship: kinshipReducer,
  civilStatus: civilStatusReducer,
  race: raceReducer,
  workSituation: workSituationReducer,
  search: searchReducer,
  address: addressReducer,
  city: cityReducer,
  person: personReducer,
  school: schoolReducer,
  schooling: schoolingReducer,
  card: cardReducer,
});

export default rootReducer;
