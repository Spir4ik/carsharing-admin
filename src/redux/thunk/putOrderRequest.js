import putOrder from '../../api/putOrder'

export default function putOrderRequest(data, id) {
  return dispatch => {
    dispatch(putOrderStarted());
    putOrder(data, id)
      .then(res => dispatch(putOrderSuccess(res)))
      .catch(error => dispatch(putOrderFailed(error)));
  };
}

const putOrderSuccess = status => ({
  type: 'PUT_ORDER_SUCCESS',
  payload: {
    status
  }
});

const putOrderStarted = () => ({
  type: 'PUT_ORDER_STARTED',
});

const putOrderFailed = error => ({
  type: 'PUT_ORDER_FAILURE',
  payload: {
    error
  }
});
