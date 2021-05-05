export const getCategorySuccess = category => ({
  type: 'GET_CATEGORY_SUCCESS',
  payload: {
    category
  }
});

export const getCategoryStarted = () => ({
  type: 'GET_CATEGORY_STARTED',
});

export const getCategoryFailed = error => ({
  type: 'GET_CATEGORY_FAILURE',
  payload: {
    error
  }
});
