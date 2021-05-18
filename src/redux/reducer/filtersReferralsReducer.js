const initialState = {
  model: "",
  category: "",
  number: "",
  array: [],
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
    case "FILTER_NUMBER":
      return {
        ...state,
        number: action.payload.number
      };
    case "FILTER_ARRAY":
      return {
        ...state,
        array: action.payload.array
      };
    case "CLEAR_FILTERS":
      return initialState;
    default:
      return state;
  }
}
