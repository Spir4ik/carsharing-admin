const stateCarDelete = {
    loading: false,
    status: 0,
    error: null
  };
  
  export default function deleteCarReducer(state = stateCarDelete, action) {
    switch (action.type) {
      case 'DELETE_CAR_STARTED':
        return {
          ...state,
          loading: true,
          status: 0
        };
      case 'DELETE_CAR_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null,
          status: action.payload.status
        };
      case 'DELETE_CAR_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      case 'CLEAR_STORE':
        return stateCarDelete
      default:
        return state;
    }
  }
  