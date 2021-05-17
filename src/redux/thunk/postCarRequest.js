import postCar from "../../api/postCar";
// import {
//   getCarsStarted,
//   getCarsSuccess,
//   getCarsFailed
// } from '../actions/thunkActions/carsThunk'

export default function postCarRequest(data){
  console.log(data);
  return dispatch => {
    dispatch(postCarsStarted());
    postCar(data)
      .then(res => console.log(res))
      .catch(error => dispatch(postCarsFailed(error)))
  };
}

export const postCarsSuccess = car => ({
  type: 'POST_CAR_SUCCESS',
  payload: {
    car
  }
});

export const postCarsStarted = () => ({
  type: 'POST_CAR_STARTED',
});

export const postCarsFailed = error => ({
  type: 'POST_CAR_FAILURE',
  payload: {
    error
  }
});
