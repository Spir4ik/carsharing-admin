import { api } from './api';

export default async function getRate() {
  const response = await api.get("/db/rate")
  return response.data.data
}
