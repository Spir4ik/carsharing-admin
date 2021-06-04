export const addOrder = order => ({
    type: "ADD_ORDER_STORE",
    payload: {
        order
    }
});

export const changeCityOrders = city => ({
    type: "CHANGE_CITY_ORDERS",
    payload: {
        city
    }
});

export const changePointOrders = point => ({
    type: "CHANGE_POINT_ORDERS",
    payload: {
        point
    }
});

export const changePriceOrders = price => ({
    type: "CHANGE_PRICE_ORDERS",
    payload: {
        price
    }
});

export const changeDateFromOrders = dateFrom => ({
    type: "CHANGE_DATE_FROM_ORDERS",
    payload: {
        dateFrom
    }
});

export const changeDateToOrders = dateTo => ({
    type: "CHANGE_DATE_TO_ORDERS",
    payload: {
        dateTo
    }
});

export const changeRateOrders = rate => ({
    type: "CHANGE_RATE_ORDERS",
    payload: {
        rate
    }
});

export const changeColorOrders = color => ({
    type: "CHANGE_COLOR_ORDERS",
    payload: {
        color
    }
});

export const changeStatus = status => ({
    type: "CHANGE_STATUS",
    payload: {
        status
    }
});

export const changeTankOrders = () => ({
    type: "CHANGE_TANK_ORDERS"
});

export const changeChairOrders = () => ({
    type: "CHANGE_CHAIR_ORDERS"
});

export const changeWheelOrders = () => ({
    type: "CHANGE_WHEEL_ORDERS"
});

export const clearOrderStore = () => ({
    type: "CLEAR__ORDER__STORE"
});