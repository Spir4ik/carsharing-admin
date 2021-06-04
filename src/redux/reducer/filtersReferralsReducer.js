const initialState = {
  model: {},
  category: {},
  cities: {},
  status: {},
  date: {}
}

export default function filtersReferralsReducer(state = initialState, action) {
  switch (action.type) {
    case "FILTER_MODEL":
      return {
        ...state,
        model: action.payload.model
      };
    case "FILTER_CATEGORY":
      return {
        ...state,
        category: action.payload.category
      };
    case "FILTER_CITIES":
      return {
        ...state,
        cities: action.payload.cities
      };
    case "FILTER_STATUS":
      return {
        ...state,
        status: action.payload.status
      };
    case "FILTER_DATE":
      return {
        ...state,
        date: action.payload.date
      };
    case "CLEAR_FILTERS_CARS":
      return {
        ...state,
        model: {},
        category: {}
      };
    case "CLEAR_FILTERS_STATE":
      return {
        ...state,
        cities: {},
        status: {},
        date: {}
      };
    default:
      return state;
  }
}
