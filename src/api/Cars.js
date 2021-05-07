import { api } from './api';

export default async function Cars() {
  const response = await api.get("db/car")
  return response.data.data
}
