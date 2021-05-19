import postCar from "../../api/postCar";
import {
  postCarsStarted,
  postCarsSuccess,
  postCarsFailed
} from '../actions/thunkActions/postCarThunk'

export default function postCarRequest(data) {
  return dispatch => {
    dispatch(postCarsStarted());
    postCar(data)
      .then(res => dispatch(postCarsSuccess(res)))
      .catch(error => dispatch(postCarsFailed(error)))
  };
}

// export const postCarsSuccess = car => ({
//   type: 'POST_CAR_SUCCESS',
//   payload: {
//     car
//   }
// });
//
// export const postCarsStarted = () => ({
//   type: 'POST_CAR_STARTED',
// });
//
// export const postCarsFailed = error => ({
//   type: 'POST_CAR_FAILURE',
//   payload: {
//     error
//   }
// });
