import login from "../../api/login";

export default function fetchLogin(data) {
  return dispatch => {
    dispatch(loginStarted())
    login(
      response => {
        localStorage.setItem("token", response.access_token)
        dispatch(loginSuccess(response.access_token))
      },
      data,
      error => dispatch(loginFailed(error))
    )
  }
}

const loginSuccess = loginData => ({
  type: 'LOGIN_SUCCESS',
  payload: {
    loginData
  }
});

const loginStarted = () => ({
  type: 'LOGIN_STARTED',
});

const loginFailed = error => ({
  type: 'LOGIN_FAILURE',
  payload: {
    error
  }
});
