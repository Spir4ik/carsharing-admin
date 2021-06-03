const initialStateFilterCars = {
    loading: false,
    cars: [],
    count: 0,
    error: null
  };
  
  export default function filterCarsReducer(state = initialStateFilterCars, action) {
    switch (action.type) {
      case 'FILTER_CARS_STARTED':
        return {
          ...state,
          loading: true
        };
      case 'FILTER_CARS_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null,
          cars: action.payload.cars,
          count: action.payload.count
        };
      case 'FILTER_CARS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  }
  