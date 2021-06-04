import {authApi} from './api';

export default async function deleteOrder(data, id) {
  const response = await authApi.delete(
    `db/order/${id}`,
    data,
  );
  return response;
}
