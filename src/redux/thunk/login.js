import login from "../../api/login";
import {
  loginSuccess,
  loginStarted,
  loginFailed
} from '../actions/thunkActions/loginThunk'

export default function fetchLogin(data) {
  return dispatch => {
    dispatch(loginStarted())
    login(data)
      .then(res => dispatch(loginSuccess(res)))
      .catch(error => dispatch(loginFailed(error)))
  }
}
