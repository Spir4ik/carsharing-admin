const initialStateCity = {
  loading: false,
  cities: [],
  error: null
};

export default function getCitiesReducer(state = initialStateCity, action) {
  switch (action.type) {
    case 'GET_CITIES_STARTED':
      return {
        ...state,
        loading: true,
        cities: []
      };
    case 'GET_CITIES_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        cities: action.payload.cities
      };
    case 'GET_CITIES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
