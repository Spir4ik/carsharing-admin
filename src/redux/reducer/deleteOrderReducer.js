const stateOrderDelete = {
    loading: false,
    status: 0,
    error: null
  };
  
  export default function deleteOrderReducer(state = stateOrderDelete, action) {
    switch (action.type) {
      case 'DELETE_ORDER_STARTED':
        return {
          ...state,
          loading: true,
          status: 0
        };
      case 'DELETE_ORDER_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null,
          status: action.payload.status
        };
      case 'DELETE_ORDER_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      case 'CLEAR_ORDER_STATUS':
        return stateOrderDelete
      default:
        return state;
    }
  }
  