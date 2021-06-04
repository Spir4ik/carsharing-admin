import deleteCar from "../../api/deleteCar";

export default function deleteCarRequest(data, id) {
  return dispatch => {
    dispatch(deleteCarStarted());
    deleteCar(data, id)
      .then(res => dispatch(deleteCarSuccess(res.status)))
      .catch(error => dispatch(deleteCarFailed(error)));
  };
}

export const deleteCarSuccess = status => ({
  type: 'DELETE_CAR_SUCCESS',
  payload: {
    status
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
