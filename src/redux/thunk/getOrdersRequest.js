import getOrders from "../../api/getOrders";
import {
  getOrdersSuccess,
  getOrdersStarted,
  getOrdersFailed
} from '../actions/thunkActions/getOrdersThunk'

export default function getOrdersRequest(page = 1, paramCity = "", paramStatus = "", date = 0) {
  return dispatch => {
    dispatch(getOrdersStarted());
    getOrders(page, paramCity, paramStatus, date)
      .then(res => dispatch(getOrdersSuccess(res.data, res.count)))
      .catch(error => dispatch(getOrdersFailed(error)))
  };
}
