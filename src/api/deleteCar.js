import {authApi} from './api';

export default async function deleteCar(data, id) {
  const response = await authApi.delete(
    `db/car/${id}`,
    data,
  );
  return response.data;
}
