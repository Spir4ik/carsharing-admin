import axios from "axios";

const BASE_URL = "https://api-factory.simbirsoft1.com/api/";
const authToken = JSON.parse(localStorage.getItem('token'))

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Api-Factory-Application-Id': process.env.APP_ID,
    'Authorization': `Basic ${process.env.SECRET_KEY}`,
    'Content-type': 'application/json',
  }
});

export const authApi = axios.create({ 
  baseURL: BASE_URL,
  headers: {
    'X-Api-Factory-Application-Id': process.env.APP_ID,
    'Authorization': `Bearer ${authToken ? authToken.access_token : null}`,
  }
});

authApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      return api.post("auth/refresh", {
        "refresh_token": authToken.refresh_token
      }).then(res => {
        if (res.status === 200) {
          localStorage.setItem("token", JSON.stringify(res.data))
          authApi.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('token')).access_token;
          return authApi(error.config)
        }
      })
    }
  }
)