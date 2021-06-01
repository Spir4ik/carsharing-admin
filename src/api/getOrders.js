import { authApi, api } from '../api/api'

export default async function getOrders(page, paramCity, paramStatus, date) {
  // const test = JSON.parse(localStorage.getItem("token")).refresh_token
  // if (Date.now() >= JSON.parse(localStorage.getItem("lifeTimeToken"))) {
  //   try {

  //   }
  //   catch () {

  //   }
  // }
  const urlCity = paramCity ? `cityId=${paramCity}&` : "";
  const urlStatus = paramStatus ? `orderStatusId=${paramStatus}&` : "";
  const urlDate = date ? `dateFrom[$gt]=${date}&dateFrom[$lt]=${new Date().getTime()}&` : ""
  const response = await authApi.get(`db/order?${urlCity}${urlStatus}${urlDate}sort[createdAt]=-1&page=${page}&limit=4`);
    // const response = await api.get("db/order");
    // console.log(response.status)
  return response.data
}
