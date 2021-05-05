const initialStateCars = {
  loading: false,
  category: [],
  error: null
};

export default function getCategoryReducer(state = initialStateCars, action) {
  switch (action.type) {
    case 'GET_CATEGORY_STARTED':
      return {
        ...state,
        loading: true,
        category: []
      };
    case 'GET_CATEGORY_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        category: action.payload.category
      };
    case 'GET_CATEGORY_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
