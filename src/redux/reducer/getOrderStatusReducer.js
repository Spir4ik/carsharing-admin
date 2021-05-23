const initialStateStatus = {
  loading: false,
  orderStatus: [],
  error: null
};

export default function getOrderStatusReducer(state = initialStateStatus, action) {
  switch (action.type) {
    case 'GET_ORDER_STATUS_STARTED':
      return {
        ...state,
        loading: true,
        orderStatus: []
      };
    case 'GET_ORDER_STATUS_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        orderStatus: action.payload.orderStatus
      };
    case 'GET_ORDER_STATUS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
