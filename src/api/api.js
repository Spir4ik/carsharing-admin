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

// authApi.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status !== 401) {
//       return Promise.reject(error)
//     }
//     return axios.post("https://api-factory.simbirsoft1.com/api/auth/refresh", {
//       'refresh_token': authToken.refresh_token
//     }, {headers: {
//       "X-Api-Factory-Application-Id": " " + process.env.APP_ID,
//       "Authorization": 'Basic ' + process.env.SECRET_KEY
//     }}).then(response => {
//         // localStorage.setItem('token', JSON.stringify(response));
//         return axios(response);
//     }).catch(error => {
//       console.log(error.response.config.headers)
//       console.log("Ничего не вышло, попробуй еще раз!!")
//     })
//   }
// )