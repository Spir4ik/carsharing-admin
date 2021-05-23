import { authApi } from '../api/api'

export default async function getOrders(page, paramCity, paramStatus) {
  const urlCity = paramCity ? `cityId=${paramCity}&` : "";
  const urlStatus = paramStatus ? `orderStatusId=${paramStatus}&` : ""
  const response = await authApi.get(`db/order?${urlCity}${urlStatus}page=${page}&limit=4`);
  return response.data
}
