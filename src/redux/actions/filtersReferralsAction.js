export const filterModel = model => ({
  type: "FILTER_MODEL",
  payload: {
    model
  }
});

export const filterCategory = category => ({
  type: "FILTER_CATEGORY",
  payload: {
    category
  }
});

export const filterArray = array => ({
  type: "FILTER_ARRAY",
  payload: {
    array
  }
});

export const filterCities = cities => ({
  type: "FILTER_CITIES",
  payload: {
    cities
  }
});

export const addCurrentCity = city => ({
  type: "ADD_CURRENT_CITY",
  payload: {
    city
  }
});

export const addCurrentStatus = currentStatus => ({
  type: "ADD_CURRENT_STATUS",
  payload: {
    currentStatus
  }
});

export const filterStatus = status => ({
  type: "FILTER_STATUS",
  payload: {
    status
  }
});

export const clearFiltersCars = () => ({
  type: 'CLEAR_FILTERS_CARS'
});

export const clearFiltersState = () => ({
  type: 'CLEAR_FILTERS_STATE'
});
