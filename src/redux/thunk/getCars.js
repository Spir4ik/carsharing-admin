import Cars from "../../api/Cars";
import {
  getCarsStarted,
  getCarsSuccess,
  getCarsFailed
} from '../actions/thunkActions/carsThunk'

export default function getCars(){
  return dispatch => {
    dispatch(getCarsStarted());
    Cars()
      .then(res => dispatch(getCarsSuccess(res)))
      .catch(error => dispatch(getCarsFailed(error)))
  };
}
