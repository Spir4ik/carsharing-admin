import { api } from './api';

export default async function Cars(cd, errorCb = null) {
  await api.get(
    "db/car"
  )
  .then(response => cd(response.data))
  .catch(error => errorCb ? errorCb(error) : null)
}
