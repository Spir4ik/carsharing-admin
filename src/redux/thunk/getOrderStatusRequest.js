import getOrderStatus from '../../api/getOrderStatus'

export default function getOrderStatusRequest() {
  return dispatch => {
    dispatch(getOrderStatusStarted());
    getOrderStatus()
      .then(res => dispatch(getOrderStatusSuccess(res)))
      .catch(error => dispatch(getOrderStatusFailed(error)));
  };
}

const getOrderStatusSuccess = orderStatus => ({
  type: 'GET_ORDER_STATUS_SUCCESS',
  payload: {
    orderStatus
  }
});

const getOrderStatusStarted = () => ({
  type: 'GET_ORDER_STATUS_STARTED',
});

const getOrderStatusFailed = error => ({
  type: 'GET_ORDER_STATUS_FAILURE',
  payload: {
    error
  }
});
