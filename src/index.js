import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/reduxStore/store';
import {Provider} from 'react-redux';
import App from './App.jsx';
import "./index.scss";


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById("root")
)
