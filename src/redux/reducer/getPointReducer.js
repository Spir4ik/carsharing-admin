const initialStatePoint = {
    loading: false,
    point: [],
    error: null
  };
  
  export default function getPointReducer(state = initialStatePoint, action) {
    switch (action.type) {
      case 'GET_POINT_STARTED':
        return {
          ...state,
          loading: true,
          point: []
        };
      case 'GET_POINT_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null,
          point: action.payload.point
        };
      case 'GET_POINT_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  }
  