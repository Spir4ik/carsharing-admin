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

export const filterNumber = number => ({
  type: "FILTER_NUMBER",
  payload: {
    number
  }
});

export const filterArray = array => ({
  type: "FILTER_ARRAY",
  payload: {
    array
  }
});

export const clearFilters = () => ({
  type: 'CLEAR_FILTERS'
});
