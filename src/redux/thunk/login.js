import login from "../../api/login";
import {loginSuccess, loginStarted, loginFailed} from '../actions/thunkActions/loginThunk'

export default function fetchLogin(data) {
  return dispatch => {
    dispatch(loginStarted())
    login(
      response => {
        localStorage.setItem("token", response.access_token)
        dispatch( loginSuccess(response.access_token) )
      },
      data,
      error => dispatch(loginFailed(error))
    )
  }
}
