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
import putCarReducer from "./putCarReducer";
import getOrdersReducer from "./getOrdersReducer";
import currentPageOrderReducer from "./currentPageOrderReducer";
import countOrderReducer from "./countOrderReducer";
import getCitiesReducer from "./getCitiesReducer";
import getOrderStatusReducer from "./getOrderStatusReducer";
import orderStoreReducer from "./orderStoreReducer";
import getPointReducer from "./getPointReducer";
import getRateReducer from "./getRateReducer";
import putOrderReducer from "./putOrderReducer";
import filterCarsReducer from "./filterCarsReducer"

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
    putCarReducer,
    getOrdersReducer,
    currentPageOrderReducer,
    countOrderReducer,
    getCitiesReducer,
    getOrderStatusReducer,
    orderStoreReducer,
    getPointReducer,
    getRateReducer,
    putOrderReducer,
    filterCarsReducer
  }
)
