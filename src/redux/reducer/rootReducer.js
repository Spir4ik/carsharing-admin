import { combineReducers } from "redux";
import authReducer from './authReducer';
import loginReducer from "./loginReducer";
import carStoreReducer from "./carStoreReducer";
import getCarsReducer from "./getCarsReducer";
import getCategoryReducer from "./getCategoryReducer";
import textForColorReducer from "./textForColorReducer";
import errorsReducer from "./errorsReducer"

export default combineReducers(
  {
    authReducer,
    loginReducer,
    carStoreReducer,
    getCarsReducer,
    getCategoryReducer,
    textForColorReducer,
    errorsReducer
  }
)
