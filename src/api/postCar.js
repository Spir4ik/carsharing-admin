import {authApi} from '../api/api'

export default async function postCar(data) {
  const response = await authApi.post(
    "db/car/",
    data,
  )
  return response.data.data
}
