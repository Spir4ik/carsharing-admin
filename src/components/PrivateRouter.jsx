import React from 'react'
import {Redirect, Route, RouteProps} from "react-router-dom";

const PrivateRouter = ({component: Component, ...rest}) => {

  return(
    <Route
      {...rest}
      render={props => localStorage.getItem('token')
        ? (<Component {...props} />)
        : (<Redirect to='/' />)
      }
    />
  )
};

export default PrivateRouter
