import {authApi} from '../api/api'

export default async function getOrders(page) {
  const response = await authApi.get(
    `db/order?page=${page}&limit=3`,
  )
  return response.data
}
