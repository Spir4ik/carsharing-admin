const initialStateCars = {
  loading: false,
  car: {},
  error: null
};

export default function postCarReducer(state = initialStateCars, action) {
  switch (action.type) {
    case 'PUT_CAR_STARTED':
      return {
        ...state,
        loading: true,
        car: []
      };
    case 'PUT_CAR_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        car: action.payload.car
      };
    case 'PUT_CAR_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
