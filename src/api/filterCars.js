import { api } from './api';

export default async function filterCars(page, id, category) {
  const currentId = id ? `id=${id}&` : "";
  const currentCategory = category ? `categoryId=${category}&` : "";
  const response = await api.get(`db/car?${currentCategory}${currentId}&page=${page}&limit=7`)
  return response.data
}
