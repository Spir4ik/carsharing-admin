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
