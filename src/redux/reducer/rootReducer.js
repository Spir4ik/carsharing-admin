import { combineReducers } from "redux";
import authReducer from './authReducer';
import loginReducer from "./loginReducer";
import carStoreReducer from "./carStoreReducer";
import getCarsReducer from "./getCarsReducer";
import getCategoryReducer from "./getCategoryReducer";
import textForColorReducer from "./textForColorReducer";
import errorsReducer from "./errorsReducer";
import progressReducer from "./progressReducer";
import alertReducer from "./alertReducer";
import postCarReducer from "./postCarReducer";
import filtersReferralsReducer from "./filtersReferralsReducer";
import putCarReducer from "./putCarReducer"

export default combineReducers(
  {
    authReducer,
    loginReducer,
    carStoreReducer,
    getCarsReducer,
    getCategoryReducer,
    textForColorReducer,
    errorsReducer,
    progressReducer,
    alertReducer,
    postCarReducer,
    filtersReferralsReducer,
    putCarReducer
  }
)
