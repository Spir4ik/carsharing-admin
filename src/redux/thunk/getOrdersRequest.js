import getOrders from "../../api/getOrders";
import {
  getOrdersSuccess,
  getOrdersStarted,
  getOrdersFailed
} from '../actions/thunkActions/getOrdersThunk'

export default function getOrdersRequest(page = 1) {
  return dispatch => {
    dispatch(getOrdersStarted());
    getOrders(page)
      .then(res => dispatch(getOrdersSuccess(res.data, res.count)))
      .catch(error => dispatch(getOrdersFailed(error)))
  };
}
