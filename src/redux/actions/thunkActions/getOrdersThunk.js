export const getOrdersSuccess = (order, count) => ({
  type: 'GET_ORDERS_SUCCESS',
  payload: {
    order,
    count
  }
});

export const getOrdersStarted = () => ({
  type: 'GET_ORDERS_STARTED',
});

export const getOrdersFailed = error => ({
  type: 'GET_ORDERS_FAILED',
  payload: {
    error
  }
});
