import {authApi} from './api';

export default async function putCar(data, id) {
  const response = await authApi.put(
    `db/car/${id}`,
    data,
  );
  return response.data.data;
}
