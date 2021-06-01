import React from 'react'
import {Redirect, Route, RouteProps} from "react-router-dom";

const PrivateRouter = ({component: Component, ...rest}) => {

  const authCheck = () => {
    if (JSON.parse(localStorage.getItem("token"))) {
      return JSON.parse(localStorage.getItem("token")).hasOwnProperty("access_token")
    }
    return false;
  }

  return(
    <Route
      {...rest}
      render={props => (authCheck() === true)
        ? (<Component {...props} />)
        : (<Redirect to='/' />)
      }
    />
  )
};

export default PrivateRouter
