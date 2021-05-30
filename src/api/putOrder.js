import {authApi} from './api';

export default async function putOrder(data, id) {
  const response = await authApi.put(
    `/db/order/${id}`,
    data,
  );
  return response.status;
}