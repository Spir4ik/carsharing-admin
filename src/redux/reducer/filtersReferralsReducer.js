const initialState = {
  model: {},
  category: {},
  array: [],
  cities: {},
  status: {},
  currentCity: "",
  currentStatus: "",
  date: {},
  dateValue: 0
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
    case "FILTER_ARRAY":
      return {
        ...state,
        array: action.payload.array
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
    case "ADD_CURRENT_CITY":
      return {
        ...state,
        currentCity: action.payload.city
      };
    case "ADD_CURRENT_STATUS":
      return {
        ...state,
        currentStatus: action.payload.currentStatus
      };
    case "FILTER_DATE":
      return {
        ...state,
        date: action.payload.date
      };
    case "ADD_DATE_VALUE":
      return {
        ...state,
        dateValue: action.payload.dateValue
      };
    case "CLEAR_FILTERS_CARS":
      return {
        ...state,
        model: {},
        category: {},
        array: [],
      };
    case "CLEAR_FILTERS_STATE":
      return {
        ...state,
        cities: {},
        status: {},
        currentCity: "",
        currentStatus: "",
        date: {},
        dateValue: 0
      };
    default:
      return state;
  }
}
