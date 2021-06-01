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
      .then(res => {
        localStorage.setItem('token', JSON.stringify(res));
        localStorage.setItem('lifeTimeToken', JSON.stringify(Date.parse(new Date()) + (res.expires_in * 1000)))
        dispatch(loginSuccess(res));
      })
      .catch(error => dispatch(loginFailed(error)))
  }
}
