const initialCarStore = {
  priceMax: 500,
  priceMin: 0,
  name: "",
  thumbnail: {},
  description: "",
  categoryId: {},
  colors: [],
  tank: "",
  number: ""
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
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        categoryId: action.payload.categoryId
      };
    case 'ADD_DESCRIPTION':
      return {
        ...state,
        description: action.payload.description
      };
    case 'ADD_COLOR':
      return {
        ...state,
        colors: [
          ...state.colors,
          ...action.payload.color
        ]
      };
    case 'DELETE_COLOR':
      const index = action.payload.index;
      return {
        ...state,
        colors: [
          ...state.colors.slice(0, index), ...state.colors.slice(index + 1)
        ]
      };
    case 'ADD_PRICE_MIN':
      return {
        ...state,
        priceMin: Number(action.payload.priceMin)
      };
    case 'ADD_PRICE_MAX':
      return {
        ...state,
        priceMax: Number(action.payload.priceMax)
      };
    case 'ADD_TANK':
      return {
        ...state,
        tank: Number(action.payload.tank)
      };
    case 'ADD_NUMBER':
      return {
        ...state,
        number: action.payload.number.toUpperCase()
      };
    case 'ADD_COMPLETED_CAR':
      return action.payload.completedCar;
    case "CLEAR_STORE":
      return initialCarStore
    default:
      return state;
  }
}


