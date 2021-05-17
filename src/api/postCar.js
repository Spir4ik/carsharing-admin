import {authApi} from '../api/api'

export default async function postCar(data) {
  const response = await authApi.post(
    "db/car/?page=1&limit=7",
    data,
  )
  return response.data
}
