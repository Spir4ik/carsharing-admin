export const putCarSuccess = car => ({
  type: 'PUT_CAR_SUCCESS',
  payload: {
    car
  }
});

export const putCarStarted = () => ({
  type: 'PUT_CAR_STARTED',
});

export const putCarFailed = error => ({
  type: 'PUT_CAR_FAILURE',
  payload: {
    error
  }
});
