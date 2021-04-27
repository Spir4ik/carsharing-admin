import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";
import reducer from "../reducer/rootReducer";

export default createStore(reducer, applyMiddleware(thunk));
