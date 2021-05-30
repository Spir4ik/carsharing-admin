const initialStateRate = {
    loading: false,
    rates: [],
    error: null
  };
  
  export default function getRateReducer(state = initialStateRate, action) {
    switch (action.type) {
      case 'GET_RATE_STARTED':
        return {
          ...state,
          loading: true,
          rates: []
        };
      case 'GET_RATE_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null,
          rates: action.payload.rate
        };
      case 'GET_RATE_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  }
  