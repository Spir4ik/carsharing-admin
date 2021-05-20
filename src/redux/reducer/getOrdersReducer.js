const initialStateOrder = {
  loading: false,
  order: [],
  count: 0,
  error: null
};

export default function getOrdersReducer(state = initialStateOrder, action) {
  switch (action.type) {
    case 'GET_ORDERS_STARTED':
      return {
        ...state,
        loading: true,
        order: [],
        count: 0
      };
    case 'GET_ORDERS_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        order: action.payload.order,
        count: action.payload.count
      };
    case 'GET_ORDERS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
