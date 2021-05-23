import { api } from './api';

export default async function getCities() {
  const response = await api.get("db/city")
  return response.data.data
}
