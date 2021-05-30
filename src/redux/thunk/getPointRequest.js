import getPoint from '../../api/getPoint'

export default function getPointRequest(cityId) {
  return dispatch => {
    dispatch(getPointStarted());
    getPoint(cityId)
      .then(res => dispatch(getPointSuccess(res)))
      .catch(error => dispatch(getPointFailed(error)));
  };
}

const getPointSuccess = point => ({
  type: 'GET_POINT_SUCCESS',
  payload: {
    point
  }
});

const getPointStarted = () => ({
  type: 'GET_POINT_STARTED',
});

const getPointFailed = error => ({
  type: 'GET_POINT_FAILURE',
  payload: {
    error
  }
});
