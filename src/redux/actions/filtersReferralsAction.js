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

export const filterCities = cities => ({
  type: "FILTER_CITIES",
  payload: {
    cities
  }
});

export const filterStatus = status => ({
  type: "FILTER_STATUS",
  payload: {
    status
  }
});

export const filterDate = date => ({
  type: "FILTER_DATE",
  payload: {
    date
  }
});

export const clearFiltersCars = () => ({
  type: 'CLEAR_FILTERS_CARS'
});

export const clearFiltersState = () => ({
  type: 'CLEAR_FILTERS_STATE'
});
