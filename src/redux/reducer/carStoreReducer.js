const initialCarStore = {
  priceMax: 500,
  priceMin: 0,
  name: "",
  thumbnail: {},
  description: "",
  categoryId: {},
  colors: []
};

export default function carStoreReducer(state = initialCarStore, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        name: action.payload.name
      }
    case 'ADD_THUMBNAIL':
      return {
        ...state,
        thumbnail: action.payload.thumbnail
      }
    case 'ADD_CATEGORY':
      return {
        ...state,
        categoryId: action.payload.categoryId
      }
    case 'ADD_COLOR':
      return {
        ...state,
        colors: [
          ...state.colors,
          ...action.payload.color
        ]
      }
    case 'ADD_PRICE_MIN':
      return {
        ...state,
        priceMin: Number(action.payload.priceMin)
      }
    case 'ADD_PRICE_MAX':
      return {
        ...state,
        priceMax: Number(action.payload.priceMax)
      }
    default:
      return state;
  }
}


