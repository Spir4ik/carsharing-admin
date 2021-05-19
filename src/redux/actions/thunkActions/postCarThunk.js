export const postCarsSuccess = car => ({
  type: 'POST_CAR_SUCCESS',
  payload: {
    car
  }
});

export const postCarsStarted = () => ({
  type: 'POST_CAR_STARTED',
});

export const postCarsFailed = error => ({
  type: 'POST_CAR_FAILURE',
  payload: {
    error
  }
});
