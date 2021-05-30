import getRate from '../../api/getRate'

export default function getRateRequest() {
  return dispatch => {
    dispatch(getRateStarted());
    getRate()
      .then(res => dispatch(getRateSuccess(res)))
      .catch(error => dispatch(getRateFailed(error)));
  };
}

const getRateSuccess = rate => ({
  type: 'GET_RATE_SUCCESS',
  payload: {
    rate
  }
});

const getRateStarted = () => ({
  type: 'GET_RATE_STARTED',
});

const getRateFailed = error => ({
  type: 'GET_RATE_FAILURE',
  payload: {
    error
  }
});
