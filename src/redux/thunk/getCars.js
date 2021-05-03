import Cars from "../../api/Cars";
import {getCarsStarted, getCarsSuccess, getCarsFailed} from '../actions/thunkActions/carsThunk'

export default function getCars(){
  return dispatch => {
    dispatch(getCarsStarted());
    Cars(
      response => {
        console.log(response)
      },
      error => dispatch(getCarsFailed(error))
    )
  }
}
