export const getCarsSuccess = car => ({
  type: 'GET_CAR_SUCCESS',
  payload: {
    car
  }
});

export const getCarsStarted = () => ({
  type: 'GET_CAR_STARTED',
});

export const getCarsFailed = error => ({
  type: 'GET_CAR_FAILURE',
  payload: {
    error
  }
});
