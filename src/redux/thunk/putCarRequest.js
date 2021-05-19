import putCar from "../../api/putCar";
import {
  putCarStarted,
  putCarSuccess,
  putCarFailed
} from '../actions/thunkActions/putCarThunk'

export default function putCarRequest(data, id) {
  return dispatch => {
    dispatch(putCarStarted());
    putCar(data, id)
      .then(res => dispatch(putCarSuccess(res)))
      .catch(error => dispatch(putCarFailed(error)));
  };
}
