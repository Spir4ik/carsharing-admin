import { api } from './api';

export default async function getPoint(cityId) {
  const response = await api.get(`db/point?cityId=${cityId}`)
  return response.data.data
}
