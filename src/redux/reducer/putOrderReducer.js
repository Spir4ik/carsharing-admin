const initialStatePutOrder = {
    loading: false,
    status: 0,
    error: null
  };
  
  export default function putOrderReducer(state = initialStatePutOrder, action) {
    switch (action.type) {
      case 'PUT_ORDER_STARTED':
        return {
          ...state,
          loading: true,
          status: 0
        };
      case 'PUT_ORDER_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null,
          status: action.payload.status
        };
      case 'PUT_ORDER_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      case "CLEAR_PUT_ORDER_STATUS":
        return initialStatePutOrder;
      default:
        return state;
    }
  }
  