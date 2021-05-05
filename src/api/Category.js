import { api } from './api';

export default async function Cars() {
  const response = await api.get("db/category")
  return response.data.data
}
