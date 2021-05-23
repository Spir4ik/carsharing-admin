import { api } from './api';

export default async function getOrderStatus() {
  const response = await api.get("db/orderStatus")
  return response.data.data
}
