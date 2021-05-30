import axios from "axios";

const BASE_URL = "https://api-factory.simbirsoft1.com/api/";

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
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
});

// export const fetchWithAuth(url) = async () => {

// }

// function refreshToken(token) {
//   return fetch('api/auth/refreshToken', {
//       method: 'POST',
//       credentials: 'include',
//       headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//           token,
//       }),
//   })
//       .then((res) => {
//           if (res.status === 200) {
//               const tokenData = res.json();
//               saveToken(JSON.stringify(tokenData)); // сохраняем полученный обновленный токен в sessionStorage, с помощью функции, заданной ранее
//               return Promise.resolve();
//           }
//           return Promise.reject();
//       });
// }