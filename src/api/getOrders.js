import { authApi } from '../api/api'

export default async function getOrders(page, paramCity, paramStatus, date) {
  const urlCity = paramCity ? `cityId=${paramCity}&` : "";
  const urlStatus = paramStatus ? `orderStatusId=${paramStatus}&` : "";
  const urlDate = date ? `dateFrom[$gt]=${date}&dateFrom[$lt]=${new Date().getTime()}&` : ""
  const response = await authApi.get(`db/order?${urlCity}${urlStatus}${urlDate}sort[createdAt]=-1&page=${page}&limit=4`);
  return response.data
}
