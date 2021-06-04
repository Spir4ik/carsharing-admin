import deleteOrder from "../../api/deleteOrder";

export default function deleteOrderRequest(data, id) {
  return dispatch => {
    dispatch(deleteOrderStarted());
    deleteOrder(data, id)
      .then(res => dispatch(deleteOrderSuccess(res.status)))
      .catch(error => dispatch(deleteOrderFailed(error)));
  };
}

export const deleteOrderSuccess = status => ({
  type: 'DELETE_ORDER_SUCCESS',
  payload: {
    status
  }
});

export const deleteOrderStarted = () => ({
  type: 'DELETE_ORDER_STARTED',
});

export const deleteOrderFailed = error => ({
  type: 'DELETE_ORDER_FAILURE',
  payload: {
    error
  }
});
