const initialState = {
  model: "",
  category: "",
  array: [],
  cities: {},
  status: {},
  currentCity: "",
  currentStatus: ""
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
        category: action.payload.category.hasOwnProperty("name") ? action.payload.category.name : ""
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
    case "CLEAR_FILTERS_CARS":
      return {
        ...state,
        model: "",
        category: "",
        number: "",
        array: [],
      };
    case "CLEAR_FILTERS_STATE":
      return {
        ...state,
        cities: {},
        status: {},
        currentCity: "",
        currentStatus: ""
      };
    default:
      return state;
  }
}
