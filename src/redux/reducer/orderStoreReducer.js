const initialOrderStore = {
    orderStatusId: {},
    cityId: {},
    pointId: {},
    carId: {},
    color: "",
    dateFrom: 0,
    dateTo: 0,
    rateId: {},
    price: 0,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false
}

export default function orderStoreReducer(state = initialOrderStore, action) {
    switch(action.type) {
      case "CHANGE_CITY_ORDERS": 
        return {
          ...state,
          cityId: action.payload.city
        }
      case "CHANGE_POINT_ORDERS": 
        return {
          ...state,
          pointId: action.payload.point
        };
      case "CHANGE_PRICE_ORDERS": 
        return {
          ...state,
          price: action.payload.price
        }
      case "CHANGE_DATE_FROM_ORDERS": 
        return {
          ...state,
          dateFrom: action.payload.dateFrom
        }
      case "CHANGE_DATE_TO_ORDERS": 
        return {
          ...state,
          dateTo: action.payload.dateTo
        }
      case "CHANGE_RATE_ORDERS": 
        return {
          ...state,
          rateId: action.payload.rate
        }
      case "CHANGE_COLOR_ORDERS": 
        return {
          ...state,
          color: action.payload.color
        }
      case "CHANGE_STATUS": 
        return {
          ...state,
          orderStatusId: action.payload.status
        }  
      case "CHANGE_TANK_ORDERS": 
        return {
          ...state,
          isFullTank: !state.isFullTank,
          price: !state.isFullTank ? state.price + 500 : state.price - 500,
        }
      case "CHANGE_CHAIR_ORDERS": 
        return {
          ...state,
          isNeedChildChair: !state.isNeedChildChair,
          price: !state.isNeedChildChair ? state.price + 200 : state.price - 200,
        }
      case "CHANGE_WHEEL_ORDERS": 
        return {
          ...state,
          isRightWheel: !state.isRightWheel,
          price: !state.isRightWheel ? state.price + 1600 : state.price - 1600,
        }
      case "ADD_ORDER_STORE": 
        return action.payload.order;
      case "CLEAR__ORDER__STORE":
        return initialOrderStore;
      default:
        return state;
    }
}