import { api } from './api';

export default async function login(data) {
  const response = await api.post("auth/login", data);
  return response.data;
}
