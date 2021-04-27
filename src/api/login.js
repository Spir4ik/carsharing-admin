import { api } from './api';

export default async function login(cd, data, errorCb = null) {
  await api.post(
    "auth/login",
    data
  ).then(response => cd(response.data))
   .catch(error => errorCb ? errorCb(error) : null)
}
