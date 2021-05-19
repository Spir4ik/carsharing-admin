import deleteCar from "../../api/deleteCar";

export default function deleteCarRequest(data, id) {
  return dispatch => {
    dispatch(deleteCarStarted());
    deleteCar(data, id)
      .then(res => console.log(res))
      .catch(error => dispatch(deleteCarFailed(error)));
  };
}

export const deleteCarSuccess = car => ({
  type: 'DELETE_CAR_SUCCESS',
  payload: {
    car
  }
});

export const deleteCarStarted = () => ({
  type: 'DELETE_CAR_STARTED',
});

export const deleteCarFailed = error => ({
  type: 'DELETE_CAR_FAILURE',
  payload: {
    error
  }
});
